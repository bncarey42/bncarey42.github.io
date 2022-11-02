#!/bin/bash
set -e

git --version
git config --global user.name 'github-actions[bot]'
git config --global user.email 'github-actions[bot]@users.noreply.github.com'
git config --global init.defaultBranch "main"

GITHUB_REPO=https://github.com/bncarey42/bncarey42.github.io.git
GITHUB_BRANCH=_gh-pages

npm ci
npm run build

cd dist
git add -A
git commit -am 'New GHP Deploy'
git checkout $GITHUB_BRANCH
git push -f -u origin $GITHUB_BRANCH --no-verify
cd -