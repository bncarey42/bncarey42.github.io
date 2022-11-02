#!/bin/bash
set -e

git --version
git config --global user.name 'bncarey42'
git config --global init.defaultBranch "main"

GITHUB_BRANCH=_gh-pages

npm ci
npm run build

cd dist
git checkout $GITHUB_BRANCH
git add -A
git commit -am 'New GHP Deploy'
git push -f $GITHUB_BRANCH --no-verify
cd -