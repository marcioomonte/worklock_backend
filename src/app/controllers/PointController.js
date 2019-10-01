import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore, format, subHours } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Point from '../models/Point';

class PointController {
  async store(req, res) {
    const schema = Yup.object().shape({
      date: Yup.date(),
      latitude: Yup.number(),
      longitude: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { date, latitude, longitude } = req.body;

    const user = req.userId;

    const point = await Point.create({
      date,
      latitude,
      longitude,
      user_id: user,
    });

    return res.json(point);
  }
}

export default new PointController();
