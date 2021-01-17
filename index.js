import express from 'express';
import dotenv from 'dotenv';
import login from './src/routers/login.routes.js';
import reg from './src/routers/reg.routes.js';
import verefy from './src/routers/verify.routes.js';

import panel from './src/routers/panel.routes.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', login);
app.use('/api', reg);
app.use('/api', verefy);

app.use('/api', panel);

app.listen(process.env.PORT, () =>
  console.log(`server is run port: ${process.env.PORT}`)
);
