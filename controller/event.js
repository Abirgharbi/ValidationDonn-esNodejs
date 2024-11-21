import Joi from "joi";

const eventSchema = Joi.object({
  title: Joi.string().required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().greater(Joi.ref("startDate")).required(),
});

export const createEvent = async (req, res) => {
  try {
    const { error } = eventSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { title, startDate, endDate } = req.body;

    const event = { title, startDate, endDate };

    res.status(201).json({
      model: event,
      message: "Événement créé avec succès !",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur !" });
  }
};
