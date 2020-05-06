#!/usr/bin/env bash

exit_with_msg() {
    echo "-------------------"
    echo "-------------------"
    echo "$1"
    echo " "
    exit "$2";
}

echo "-------------------"
echo "Building Dependencies.."
echo "-------------------"
cd ./node_modules/gatsby-plugin-ipfs/
rm -f ./gatsby-node.js
(yarn && yarn build) || exit_with_msg "Build deps failed!" $?
cd ../../

echo " "
echo "-------------------"
echo "Building Project.."
echo "-------------------"
gatsby clean
gatsby build --prefix-paths || exit_with_msg "Build failed!" $?

echo " "
echo "-------------------"
echo "Build Complete!"
echo "-------------------"
echo " "
