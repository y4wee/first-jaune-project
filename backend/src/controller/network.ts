import { IcontrollerNetwork } from "../interfaces/network";
import { dataSource } from "../utils";
import { Network } from "../entity/Network";

export const NetworkController: IcontrollerNetwork = {
  get: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Network);

      const network = await repository.findOneOrFail({
        where: {
          id: +req.params.id,
        },
        relations: ["followers", "following"],
      });

      res.send(network);
    } catch (error) {
      res.send("Error while following : " + error);
    }
  },
};
