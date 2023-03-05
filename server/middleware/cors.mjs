import env from '@config';

export default () => (req, res, next) => {
  res.append('Access-Control-Allow-Origin', env.CLIENT_PATH);
  res.append('Access-Control-Allow-Credentials', 'true');
  res.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type, Origin, Cookies');

  if (req.method === 'OPTIONS') {
    res.status(200).send();
    return;
  }

  next();
};
