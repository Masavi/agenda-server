require('dotenv').config();
require('./database');

const PORT = process.env.PORT || 5000;
const app = require('./server');

app.listen(PORT, () => console.log(`Server on port ${PORT}`));