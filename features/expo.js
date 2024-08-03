import express from 'express';
import path from 'path';

function expo(dir, file, route, port) {
    const app = express();
    app.get(route, (req, res) => {
        res.sendFile(path.join(__dirname, dir, file));
    });
    
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}/${route}`);
    });

}
export default expo;

