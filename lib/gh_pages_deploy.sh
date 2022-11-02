#!/bin/bash
set -e

git --version
git config --global user.name 'bncarey42'
git config --global init.defaultBranch "main"

npm ci
npm run build

cd dist
git add -A
git commit -m 'New GHP Deploy'
git push -f -u origin $GITHUB_BRANCH --no-verify
cd -