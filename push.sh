#!/bin/sh

cd frontend/build

aws s3 sync $(pwd) s3://$DESTINATION_BUCKET/ --include "*"
