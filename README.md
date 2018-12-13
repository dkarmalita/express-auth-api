# Basic node api server

## Install dependensies

```sh
npm add -S express mongoose body-parser
npm add -S morgan
npm add -D nodemon eslint 
npm add -D @babel/cli @babel/preset-env @babel/node @babel/core
npm add -D babel-eslint
```

[Babel Setup](https://www.robinwieruch.de/minimal-node-js-babel-setup/)
[Babel Setup](https://medium.com/@sergey.bakaev/%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B1%D0%B0%D0%B7%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0-nodejs-%D1%81-babel-7-eslint-jest-8164b99777a4)

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

[MongoDB/docker](https://www.thachmai.info/2015/04/30/running-mongodb-container/)
[robomongo/Robo 3T](https://robomongo.org/)
