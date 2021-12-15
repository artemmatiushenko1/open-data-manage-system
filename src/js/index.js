const db = require('./lib/db');
const server = require('./server.js');
const associate = require('./lib/associate');

(async () => {
  try {
    associate();
    await db.sync();

    const PORT = 8080;

    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (e) {
    throw e;
  }
})();
