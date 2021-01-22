import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const users: User[] = await getRepository(User).find();
    return res.json(users);
  } catch (e) {
    return res.json(e);
  }
};

export const createUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const newUser: User[] = await getRepository(User).create(req.body);
    const result: User[] = await getRepository(User).save(newUser);
    return res.json(result);
  } catch (e) {
    return res.json(e);
  }
};

export const getUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const user: User | undefined = await getRepository(User).findOne(req.params.id);
    if (user) {
      return res.json(user);
    }
    return res.status(404).json({"message": "Not User Found"});
  } catch (e) {
    return res.json(e);
  }
};

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const user: User | undefined = await getRepository(User).findOne(req.params.id);
    if (user) {
      getRepository(User).merge(user, req.body);
      const result: User = await getRepository(User).save(user);
      return res.json(result);
    }
    return res.status(404).json({"message": "Not User Found"});
  } catch (e) {
    return res.json(e);
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const result = await getRepository(User).delete(req.params.id);
    return res.json(result);
  } catch (e) {
    return res.json(e);
  }
};
