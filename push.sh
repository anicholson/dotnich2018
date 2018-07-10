#!/bin/sh

cd frontend/build

aws s3 sync --delete --exclude assets/ $(pwd) s3://andrewdotni.ch/
aws s3 sync --delete --cache-control "max-age=31536000" assets/ s3://andrewdotni.ch/assets

#aws s3 sync --delete --exclude assets/* build/ "s3://${BUCKET_NAME}"
#      - aws s3 sync --delete --cache-control "max-age=31536000" build/assets "s3://${BUCKET_NAME}/assets"

