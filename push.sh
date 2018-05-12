#!/bin/sh

cd frontend/build

aws s3 sync $(pwd) s3://andrewdotni.ch/ --include "*"
