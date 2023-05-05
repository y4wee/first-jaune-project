import { Request, Response } from "express";

interface ItypedRequestBody<T> extends Request {
  body: T;
}

export interface IcontrollerNetwork {
  get(req: ItypedRequestBody<void>, res: Response): Promise<void>;
}
