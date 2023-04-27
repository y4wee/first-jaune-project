import { Request, Response } from "express";

export interface Icontroller {
    [key: string]: (req: Request, res: Response) => void;
}