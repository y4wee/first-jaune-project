import { Request, Response } from "express";

interface ItypedRequestBody<T> extends Request {
  body: T;
}

interface IcreateFollow {
  following: number;
  follower: number;
}

interface IdeleteFollow {
  id: number;
}

export interface IcontrollerFollow {
  create(
    req: ItypedRequestBody<IcreateFollow>,
    res: Response
  ): Promise<void>;
  deleteOne(
    req: ItypedRequestBody<IdeleteFollow>,
    res: Response
  ): Promise<void>;
}
