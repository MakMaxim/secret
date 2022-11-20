const express = require('express');
const mesRouter = require('./routes/mes.routes');
const PORT = 8080;
const app = express();
const cors = require('cors');

app.use(cors()).use(express.json()).use('/api', mesRouter);

app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
