import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore, format, subHours } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Point from '../models/Point';

class PointController {
  async store(req, res) {
    const schema = Yup.object().shape({
      company_id: Yup.number(),
      time_in: Yup.date(),
      time_out: Yup.date(),
      time_pause: Yup.date(),
      time_return: Yup.date(),
      latitude: Yup.number(),
      longitude: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { time_in } = req.body;

    return res.json();
  }
}

export default new PointController();
