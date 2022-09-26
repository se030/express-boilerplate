/* router implemented here */

import express from 'express';
import service from './service.mjs';

const router = express.Router();

router.get('/', function (req, res, next) {
  res.send(/* do something with service */);
});

export default router;
