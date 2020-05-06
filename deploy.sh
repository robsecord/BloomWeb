#!/usr/bin/env bash

exit_with_msg() {
    echo "-------------------"
    echo "-------------------"
    echo "$1"
    echo " "
    exit "$2";
}

echo "-------------------"
echo "Bumping version number.."
echo "-------------------"
version update -p || exit_with_msg "Version bump failed!" $?

echo "-------------------"
echo "Pushing to Github"
echo "-------------------"
git add . || exit_with_msg "Adding files to Git failed!" $?
git commit -m "$1" || exit_with_msg "Committing files to Git failed!" $?
git push || exit_with_msg "Pushing files to Github failed!" $?

echo " "
echo "-------------------"
echo "Deploy Complete!"
echo "-------------------"
git status
echo " "
