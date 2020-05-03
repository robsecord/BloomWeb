// Frameworks
import React, { useState } from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import CropFreeIcon from '@material-ui/icons/CropFree';

// Custom Styles
import useRootStyles from '../layout/styles/root.styles';
const useCustomStyles = makeStyles((theme) => ({
    fullWidth: {
        width: '100%',
    },
}));

// Welcome Section
const WelcomeSection = ({ location }) => {
    const classes = useRootStyles();
    const customClasses = useCustomStyles();

    const [ searchValue, setSearchValue ] = useState('');

    const _handleSearchInput = (evt) => {
        setSearchValue(evt.target.value);
    };

    const _handleSearch = () => {
        console.log('TODO: Search For: ', searchValue);
    };

    return (
        <>
            <Typography
                variant={'h4'}
                component={'h3'}
                className={classes.pageHeader}
            >
                Find a Company
            </Typography>

            <Box component="div" className={customClasses.fullWidth} px={4} py={2}>
                <form autoComplete="off">
                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="searchCompany">Search</InputLabel>
                        <OutlinedInput
                            id="searchCompany"
                            type={'text'}
                            value={searchValue}
                            onChange={_handleSearchInput}
                            labelWidth={60}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="SeasearchCompanyrch"
                                        onClick={_handleSearch}
                                        edge="end"
                                    >
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </form>
            </Box>

            <Typography
                variant={'h5'}
                component={'p'}
                className={classes.pageHeader}
            >
                OR
            </Typography>

            <Box px={4} py={4}>
                <Button 
                    variant="outlined" 
                    color="primary" 
                    size="large"
                    startIcon={<CropFreeIcon />}
                >
                    Scan a Coupon!
                </Button>
            </Box>

            <Box px={4} py={5}>
                <Button color="secondary">
                    I want to register my company!
                </Button>
            </Box>
        </>
    )
};

export default WelcomeSection;
