const Joi = require("joi");

const log = (condition, { error, value }) => {
  console.log();
  console.log(condition);
  if (error) console.log(error.message);
  else console.log(value);
};

log(
  "Joi date => see how joi handle date-only string with date() validation",
  Joi.object({
    birth_date: Joi.date().required(),
  }).validate({
    birth_date: "1986-04-05",
  })
);

log(
  "Joi date => validation has NOT worked for date-only",
  Joi.object({
    birth_date: Joi.date().required(),
  }).validate({
    birth_date: "1986-04-05T03:00:00.000Z",
  })
);

log(
  "Joi regex => worked, validation has worked, invalid date-only input since it has time",
  Joi.object({
    birth_date: Joi.string()
      .regex(/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/)
      .required(),
  }).validate({
    birth_date: "1986-04-05T03:00:00.000Z",
  })
);

log(
  "Joi regex, validation has worked, valid date-only input",
  Joi.object({
    birth_date: Joi.string()
      .regex(/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/)
      .required(),
  }).validate({
    birth_date: "1986-04-05",
  })
);
