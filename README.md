# Basic node api server

## Install dependensies

```sh
npm add -S express mongoose body-parser
npm add -S morgan
npm add -D nodemon eslint 
npm add -D @babel/cli @babel/preset-env @babel/node @babel/core
npm add -D babel-eslint
```

## Auth

```sh
npm add -S express-jwt jsonwebtoken passport passport-local passport-local-mongoose
```

## MongoDB docker

```sh
mkdir data

# run mongodb
docker run -d -p 27017:27017 -v $(pwd)/data:/data/db mongo

# stop mongodb
docker stop $(sudo docker ps -q)
# enter the user's password here
```
