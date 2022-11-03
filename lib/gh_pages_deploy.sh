#!/bin/bash
set -e

git --version
git config --global user.email "<>"
git config --global user.name "[bot]-gh-action"

GITHUB_REPO=https://github.com/bncarey42/bncarey42.github.io.git
GITHUB_BRANCH=main_gh-pages

npm ci
npm run build
cd dist
rm -rf .git
git init
git add -A
git commit -am 'New GHP Deploy'
git push -f $GITHUB_REPO $GITHUB_BRANCH --no-verify
cd -