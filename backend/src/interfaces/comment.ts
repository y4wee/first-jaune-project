import { Request, Response } from "express";
import { Post } from "../entity/Post";
import { Wilder } from "../entity/Wilder";

interface ItypedRequestBody<T> extends Request {
  body: T;
}

interface IcreateComment {
  content: string;
  wilder: Wilder;
  post: Post;
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
