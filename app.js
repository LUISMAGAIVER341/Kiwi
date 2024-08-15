import fs from 'fs';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
function expo(route, file, port) {
  const app = express();

  // Get the file itself.
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, file);

  // Setup the file and host it.
  app.use(route, express.static(filePath));
  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
}
const appBuilder = fs.readFileSync('./app/main.kiwi', 'utf8');

eval(appBuilder);


