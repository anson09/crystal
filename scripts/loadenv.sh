#!/usr/bin/env bash
set -eo pipefail

echo "$(sed '/VERSION/d' .env)" > .env
echo VERSION=$(cat package.json|grep '"version":'|cut -d'"' -f4) >> .env

ENV=$(grep -v '^#' .env | xargs)
export $ENV