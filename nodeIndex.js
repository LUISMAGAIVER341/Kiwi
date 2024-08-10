import fs from 'fs';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
// Função para iniciar o servidor
function expo(route, file, port) {
  const app = express();

  // Resolver o caminho absoluto do arquivo
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, file);

  // Configurar a rota para servir o arquivo
  app.use(route, express.static(filePath));

  // Iniciar o servidor na porta especificada
  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
}
const appBuilder = fs.readFileSync('./app/main.kiwi', 'utf8');

eval(appBuilder);


