import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDb from '../db';
import foodtruck from '../controller/foodtruck';
import account from '../controller/account';

const router = express();

// connect to db
initializeDb( db => {

  // initialize middleware
  router.use(middleware({ config, db }));

  // api routes v1
  router.use('/foodtruck', foodtruck({ config, db }))
  router.use('/account', account({ config, db }))

})

export default router;
