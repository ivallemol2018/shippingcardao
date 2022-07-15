const keys = require('../config/keys');

const options = {
  connection: {
    URL: keys.urlMongo
  },
  useNewUrlParser: true,
  useUnifiedTopology: true
}

module.exports = options