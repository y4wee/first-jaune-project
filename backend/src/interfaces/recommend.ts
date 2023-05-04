import { Request, Response } from "express";

interface ItypedRequestBody<T> extends Request {
  body: T;
}

interface IcreateRecommend {
  content: string;
  receiver: number;
  sender: number;
}

interface IupdateRecommend {
  id: number;
  content: string;
}

interface IdeleteRecommend {
  id: number;
}

export interface IcontrollerRecommend {
  create(
    req: ItypedRequestBody<IcreateRecommend>,
    res: Response
  ): Promise<void>;
  updateOne(
    req: ItypedRequestBody<IupdateRecommend>,
    res: Response
  ): Promise<void>;
  deleteOne(
    req: ItypedRequestBody<IdeleteRecommend>,
    res: Response
  ): Promise<void>;
}
