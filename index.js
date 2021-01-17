import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api');

app.listen(3000, () => console.log('server is run'));
