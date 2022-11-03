#!/bin/bash
set -e
rm -rf .git
cd ./dist
git init
git add -A
git commit -am 'New GHP Deploy'
git push -f $GITHUB_REPO $GITHUB_BRANCH --no-verify
cd -