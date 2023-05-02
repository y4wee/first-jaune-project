import { Request, Response } from "express";
import { Wilder } from "../entity/Wilder";

interface ItypedRequestBody<T> extends Request {
  body: T;
}

interface IcreatePost {
  title: string;
  content: string;
  wilder: Wilder;
}

interface IgetOnePost {
  id: number;
}

interface IupdatePost {
  id: number;
  title: string;
  content: string;
}

interface IdeletePost {
  id: number;
}

export interface IcontrollerPost {
  create(req: ItypedRequestBody<IcreatePost>, res: Response): Promise<void>;
  getAll(req: Request, res: Response): Promise<void>;
  getOne(req: ItypedRequestBody<IgetOnePost>, res: Response): Promise<void>;
  updateOne(req: ItypedRequestBody<IupdatePost>, res: Response): Promise<void>;
  deleteOne(req: ItypedRequestBody<IdeletePost>, res: Response): Promise<void>;
}
