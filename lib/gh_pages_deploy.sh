#!/bin/bash
set -e

mv ./dist $TMP_DIR/ghp-build
rm -rf ./*
mv $TMP_DIR/ghp-build/* .

ls -lFsgh

git commit -am 'New GHP Deploy'
git push -f $GITHUB_REPO $GITHUB_BRANCH --no-verify
cd -