import http from 'http';
import { userRoutes } from './routes/userRoutes.js';

const server = http.createServer(async (req, res) => {
    const handled = await userRoutes(req, res);
    console.log('handled:', handled);
    if (!handled && !res.writableEnded) {
        console.log('handled:', res.writableEnded);
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(
            JSON.stringify({ message: 'Not Found' })
        );
    } else {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(
            JSON.stringify({ message: handled })
        );
    }

})

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})