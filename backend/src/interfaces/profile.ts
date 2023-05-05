import { Request, Response } from "express";

interface ItypedRequestBody<T> extends Request {
  body: T;
}
interface IgetOneProfile {
  id: number;
}

interface IupdateProfile {
  id: number;
  name: string;
  city: string;
  description: string;
  photo: string;
}

export interface IcontrollerProfile {
  getOne(req: ItypedRequestBody<IgetOneProfile>, res: Response): Promise<void>;
  getAll(req: Request, res: Response): Promise<void>;
  updateOwner(
    req: ItypedRequestBody<IupdateProfile>,
    res: Response
  ): Promise<void>;
}
