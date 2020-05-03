#!/usr/bin/env bash

exit_with_msg() {
    echo "-------------------"
    echo "-------------------"
    echo "$1"
    echo " "
    exit "$2";
}

echo "Bumping version number.."
version update -p

echo "Rebuilding.."
rm -rf public/
yarn build || exit_with_msg "Build failed!" $?

echo "Pushing to Github"
git add .
git commit -m "$1"
git push

echo "-------------------"
git status
