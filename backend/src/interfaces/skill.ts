import { Request, Response } from "express";
import { Wilder } from "../entity/Wilder";

interface ItypedRequestBody<T> extends Request {
  body: T;
}

interface IcreateSkill {
  name: string;
  grade: number;
  wilder: Wilder;
}

interface IupdateSkill {
  id: number;
  grade: number;
}

interface IdeleteSkill {
  id: number;
}

export interface IcontrollerSkill {
  create(req: ItypedRequestBody<IcreateSkill>, res: Response): Promise<void>;
  getAllNames(req: Request, res: Response): Promise<void>;
  updateOne(req: ItypedRequestBody<IupdateSkill>, res: Response): Promise<void>;
  deleteOne(req: ItypedRequestBody<IdeleteSkill>, res: Response): Promise<void>;
}
