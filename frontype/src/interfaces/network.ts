import { IprofileBase } from "./profile";

export interface Ifollower {
  id: number;
  follower: IprofileBase;
}

export interface Ifollowing {
  id: number;
  following: IprofileBase;
}

export interface Inetwork {
  id: number;
  followers: Ifollower[];
  following: Ifollowing[];
}
