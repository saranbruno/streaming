import type { Router } from "express";

export const setupApiUsers = (api: Router) => {
    api.get("/users/:id", (req, res) => {
        console.log(req.params.id);
        return res.json(req.params);
    });
}