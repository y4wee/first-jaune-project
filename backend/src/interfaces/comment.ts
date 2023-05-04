import { Request, Response } from "express";

interface ItypedRequestBody<T> extends Request {
  body: T;
}

interface IcreateComment {
  content: string;
  profile: number;
  article: number;
}

interface IupdateComment {
  id: number;
  content: string;
}

interface IdeleteComment {
  id: number;
}

export interface IcontrollerComment {
  create(req: ItypedRequestBody<IcreateComment>, res: Response): Promise<void>;
  updateOne(
    req: ItypedRequestBody<IupdateComment>,
    res: Response
  ): Promise<void>;
  deleteOne(
    req: ItypedRequestBody<IdeleteComment>,
    res: Response
  ): Promise<void>;
}
