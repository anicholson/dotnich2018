#!/bin/sh

cd frontend/build

aws s3 sync --delete --exclude static/* $(pwd) s3://andrewdotni.ch/ --include
aws s3 sync --delete --cache-control "max-age=31536000" static/* s3://andrewdotni.ch/static

#aws s3 sync --delete --exclude assets/* build/ "s3://${BUCKET_NAME}"
#      - aws s3 sync --delete --cache-control "max-age=31536000" build/assets "s3://${BUCKET_NAME}/assets"

