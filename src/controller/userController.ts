import express, { Request, Response } from "express";
import {
  addUser,
  deleteUser,
  getUser,
  getUserById,
  updateUser,
} from "../sql3.data.js";

const userController = {
  getUsers: async (req: Request, res: Response) => {
    const data = await getUser();
    return res.status(200).send(data);
  },

  addUser: async (req: Request, res: Response) => {
    const data = await addUser(req.body);
    return res.status(201).send(data);
  },

  updateUser: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const data = await updateUser(id, req.body);
    return res.send(data);
  },

  findOneUser: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const data = await getUserById(id);
    return res.send(data);
  },

  deleteUser: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const data = await deleteUser(id);
    return res.send(data);
  },
};

export default userController;
