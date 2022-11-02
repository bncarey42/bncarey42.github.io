#!/bin/bash
set -e

git --version
git config --global user.name 'bncarey42'
git config --global init.defaultBranch "main"

GITHUB_REPO=git@github.com:bncarey42/bncarey42.github.io.git
GITHUB_BRANCH=_gh-pages
git checkout -b $GITHUB_BRANCH

npm ci
npm run build

cd dist
git add -A
git commit -m 'New GHP Deploy'
git push -f -u origin $GITHUB_BRANCH --no-verify
cd -