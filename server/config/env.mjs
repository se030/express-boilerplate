import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: `${path.resolve()}/config/.env` });

export default {
  port: process.env.PORT
};
