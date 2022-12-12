import truckCreateService from "../../services/trucks/truck.create.service";
import { Request, Response } from "express";
import { AppError, handleError, handlePrismaError } from "../../errors";
import { Prisma } from "@prisma/client";
import { ITruckCreate } from "../../interfaces/trucks/truck.types";

const truckCreateController = async (req: Request, res: Response) => {
  const truckData = req.body;

  try {
    const serviceResponse = await truckCreateService(truckData as ITruckCreate);

    return res.status(201).json(serviceResponse);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      handlePrismaError(err, res);
    }
  }
};

export default truckCreateController;
