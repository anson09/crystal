#!/usr/bin/env bash
set -eo pipefail

sed -i '' '/VERSION/d' .env
echo VERSION=$(cat package.json|grep '"version":'|cut -d'"' -f4) >> .env

ENV=$(grep -v '^#' .env | xargs)
export $ENV