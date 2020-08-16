#!/usr/bin/env bash
set -eo pipefail

echo "$(sed '/VERSION/d' .env)" > .env
echo VERSION=$(cat package.json|grep '"version":'|cut -d'"' -f4) >> .env

ENV=$(grep -v '^#' .env | xargs)
REQUIRES=('PUBLIC_PATH')

for ITEM in ${REQUIRES[@]}
    do
        if [[ ! $ENV =~ $ITEM ]]
        then
            echo "script fail: .env missing item - < ${ITEM} >\n"
            exit 1
        fi
    done

export $ENV