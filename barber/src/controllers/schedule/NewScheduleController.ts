import { Request, Response } from "express";
import { NewScheduleService } from "../../services/schedule/NewScheduleService";

class NewScheduleController{
  async handle(resquest: Request, response: Response){
    const { haircut_id, customer } = resquest.body;
    const user_id = resquest.user_id;

    const newSchedule = new NewScheduleService();
    const schedule = await newSchedule.execute({
      user_id,
      haircut_id,
      customer
    })

    return response.json(schedule);
  }
}

export { NewScheduleController }