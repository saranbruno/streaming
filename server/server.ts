import express from 'express';
import dotenv from 'dotenv';
import { setupApi } from './middlewares/setupApi';
import { createServer } from 'http';
import { setupController } from './middlewares/setupController';

dotenv.config();

const server_port = process.env.SERVER_PORT;
export const server = express();
const httpServer = createServer(server);

const setup = async () => {
    if (!server_port) {
        console.log("[SERVER] Porta do servidor não configurada, corrija no .env");
    }
    const controller = express.Router();
    const api = express.Router();

    setupApi(api);
    setupController(controller);

    server.use("/api", api);
    server.use("/controller", controller);
    
    httpServer.listen(server_port,  () => {
        console.log(`Servidor iniciado com sucesso na porta ${server_port}!`);
    });
}

setup();
