import express, { Router } from "express";
import cors from 'cors';
import { setupApiUsers } from "../api/api.users";

export const setupApi = async (api: Router) => {
    api.use(cors({
        origin: '*',
        credentials: true,
    }));

    api.use(express.json());

    const endpoints: Array<(api: Router) => Promise<void> | void> = [setupApiUsers];

    for(const endpoint of endpoints) {
        await endpoint(api);
    }
}