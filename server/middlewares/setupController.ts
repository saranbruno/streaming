import express, { Router } from "express";
import cors from 'cors';

export const setupController = async (route: Router) => {

    route.use(cors({
        origin: '*',
        credentials: true,
    }));

    route.use(express.json());

    const endpoints: Array<(endpoint: Router) => Promise<void> | void> = [];

    for (const endpoint of endpoints) {
        await endpoint(route);
    }
}