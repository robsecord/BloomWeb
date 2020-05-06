#!/usr/bin/env bash

echo "-------------------"
echo "Bumping version number.."
echo "-------------------"
version update -p

echo "-------------------"
echo "Pushing to Github"
echo "-------------------"
git add .
git commit -m "$1"
git push

echo " "
echo "-------------------"
echo "Deploy Complete!"
echo "-------------------"
git status
echo " "
