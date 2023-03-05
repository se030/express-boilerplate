import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: `${path.resolve()}/config/.env` });

export default {
  PORT: process.env.PORT,
  CLIENT_PATH: process.env.CLIENT_PATH
};
