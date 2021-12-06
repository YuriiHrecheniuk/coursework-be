const app = require('./src/app');

const utils = require('./src/utils');

const {getConnection} = utils.DB;
getConnection();

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});