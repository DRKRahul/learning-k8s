#!/bin/bash

docker build -t express-app:$1 .

docker tag express-app:1.0.0 rahul2411/express-app:$1

docker push rahul2411/express-app:$1
