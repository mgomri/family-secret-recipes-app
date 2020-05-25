require('dotenv').config();
const app = require('./api/server');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`\n\n*** Server is listening on port ${port} ***\n`);
});