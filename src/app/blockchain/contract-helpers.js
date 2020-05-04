// Frameworks
import React from 'react';
import * as _ from 'lodash';

// App Components
import { GLOBALS } from '../utils/globals';
import IPFS from '../utils/ipfs';

// Contract Data
import {
    getContractByName,
    Bloom
} from '../blockchain/contracts';


// https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1155.md#erc-1155-metadata-uri-json-schema
// https://docs.opensea.io/docs/metadata-standards
const tokenMetadata = {
    'description'       : '',
    'external_url'      : '',
    'animation_url'     : '',       // TODO
    'youtube_url'       : '',       // TODO
    'icon'              : '',
    'image'             : '',
    'name'              : '',
    'symbol'            : '',
    'decimals'          : 18,
    'background_color'  : 'FFF',
    'attributes'        : [],
};

const _contractErrorHandler = (methodName, txDispatch) => (err, txProof) => {
    const msg = _.get(err, 'message', err.toString());
    if (_.isEmpty(txProof) && /denied transaction signature/i.test(msg)) {
        txDispatch({type: 'CLEAR_STREAM'});
        return;
    }

    const errorMsg = [`[${methodName}]`];
    if (/gateway timeout/i.test(msg)) {
        errorMsg.push('Failed to save Image and/or Metadata to IPFS!');
    } else {
        errorMsg.push('An unexpected error has occurred!');
        console.error(err);
    }

    console.info(`[${methodName}] ${msg}`);
    txDispatch({
        type: 'STREAM_ERROR',
        payload: {streamError: errorMsg.join(' ')}
    });
};


const ContractHelpers = {};

ContractHelpers.readContractValue = async (contractName, method, ...args) => {
    const contract = getContractByName(contractName);
    if (!contract) {
        throw new Error(`[ContractHelpers.readContractValue] Invalid Contract Name: ${contractName}`);
    }
    return await contract.instance().callContractFn(method, ...args);
};

ContractHelpers.saveMetadata = ({ particleData, txDispatch }) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Generate Token Metadata
            const jsonMetadata            = {...tokenMetadata};
            jsonMetadata.name             = particleData.name;
            jsonMetadata.symbol           = particleData.symbol;
            jsonMetadata.description      = particleData.desc;
            jsonMetadata.external_url     = `${GLOBALS.ACCELERATOR_URL}${GLOBALS.APP_ROOT}/type/{id}`;

            if (_.has(jsonMetadata, 'backgroundColor')) {
                jsonMetadata.background_color = particleData.backgroundColor.replace('#', '');
            }

            // Rich Metadata from Custom Attributes
            jsonMetadata.attributes = _.map(particleData.attributes || [], attr => {
                const options = {
                    'trait_type' : attr.name,
                    'value'      : attr.value,
                };
                if (attr.type !== 'properties') {
                    options.value = parseFloat(attr.value);
                }
                if (!_.isEmpty(attr.maxValue)) {
                    options['max_value'] = parseFloat(attr.maxValue);
                }
                if (attr.type === 'stats') {
                    options['display_type'] = 'number';
                }
                if (attr.type === 'boost_number') {
                    options['display_type'] = 'boost_number';
                }
                if (attr.type === 'boost_percentage') {
                    options['display_type'] = 'boost_percentage';
                }
                return options;
            });

            // Save Image File(s) to IPFS
            txDispatch({
                type: 'STREAM_TRANSITION', payload: {
                    streamTransitions: [{to: 'CREATE', transition: 'IPFS_IMG'}]
                }
            });
            if (particleData.isSeries) {
                // Icon
                jsonMetadata.icon = await IPFS.saveImageFile({fileBuffer: particleData.iconBuffer});

                // Image
                jsonMetadata.image = await IPFS.saveImageFile({fileBuffer: particleData.imageBuffer});
            } else {
                // Icon as Image
                jsonMetadata.image = await IPFS.saveImageFile({fileBuffer: particleData.iconBuffer});
            }

            // Save Metadata to IPFS
            txDispatch({
                type: 'STREAM_TRANSITION', payload: {
                    streamTransitions: [{to: 'CREATE', transition: 'IPFS_META'}]
                }
            });
            const jsonFileUrl = await IPFS.saveJsonFile({jsonObj: jsonMetadata});

            resolve({jsonFileUrl, jsonMetadata});
        }
        catch (err) {
            reject(err);
        }
    });
};

export { ContractHelpers, tokenMetadata };
