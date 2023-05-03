import { Request, Response } from "express";

interface ItypedRequestBody<T> extends Request {
  body: T;
}

interface IcreateWilder {
  name: string;
  city: string;
  description: string;
  photo: string;
}

interface IupdateWilder {
  id: number;
  name: string;
  city: string;
}

interface IdeleteWilder {
  id: number;
}

export interface IcontrollerWilder {
  create(req: ItypedRequestBody<IcreateWilder>, res: Response): Promise<void>;
  getAll(req: Request, res: Response): Promise<void>;
  updateOne(
    req: ItypedRequestBody<IupdateWilder>,
    res: Response
  ): Promise<void>;
  deleteOne(
    req: ItypedRequestBody<IdeleteWilder>,
    res: Response
  ): Promise<void>;
}
