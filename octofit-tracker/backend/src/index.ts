import express from 'express';

import './config/database.js';

const app = express();
const port = 8000;
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-${port}.app.github.dev`
  : `http://localhost:${port}`;

app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({ service: 'octofit-tracker-api', status: 'ok', baseUrl });
});

app.listen(port, () => {
  console.log(`OctoFit Tracker API listening at ${baseUrl}`);
});