// import express from '../node_modules/express/index.js';
// import path from '../node_modules/path/path.js';

// function expo(dir, file, route, port) {
//     const app = express();
//     app.get(route, (req, res, next) => {
//         res.sendFile(path.join(dir, file));
//     });
    
//     app.listen(port, () => {
//         console.log(`Server running at http://localhost:${port}/${route}`);
//     });

// }

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

// Exportar a função para ser usada em outros módulos
export { expo };



