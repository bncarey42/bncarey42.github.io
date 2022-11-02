#!/bin/bash
set -e

git --version
git config --global user.email "<>"
git config --global user.name "bot-github-actions"
git config --global init.defaultBranch "main"

GITHUB_REPO=https://github.com/bncarey42/bncarey42.github.io.git
GITHUB_BRANCH=main:_gh-pages

npm install
npm run build
cd dist
rm -rfv .git
git init
git add -A
git commit -am 'New GHP Deploy'
git remote add origin $GITHUB_REPO
git checkout -b $GITHUB_BRANCH
git push -f -u origin $GITHUB_BRANCH --no-verify
cd -