import express from 'express';
import path from 'path';
import logger from 'morgan';

const app = express();

app.use(logger('dev'));
app.use(express.static(path.join(path.resolve(), 'public')));

export default app;
