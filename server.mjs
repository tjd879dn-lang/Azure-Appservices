import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    node: process.version,
    region: process.env.WEBSITE_SITE_NAME || 'local',
    time: new Date().toISOString()
  });
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(PORT, () => {
  console.log(`[web] listening on ${PORT}`);
});