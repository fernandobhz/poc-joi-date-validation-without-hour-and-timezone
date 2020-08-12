const Joi = require("joi");

// Joi date => validation has NOT worked for date-only
console.log(
  Joi.object({
    birth_date: Joi.date().required(),
  }).validate({
    birth_date: "1986-04-05T03:00:00.000Z",
  })
);

// Joi regex => worked, validation has worked, invalid date-only input since it has time
console.log(
  Joi.object({
    birth_date: Joi.string()
      .regex(/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/)
      .required(),
  }).validate({
    birth_date: "1986-04-05T03:00:00.000Z",
  })
);

// Joi regex, validation has worked, valid date-only input
console.log(
  Joi.object({
    birth_date: Joi.string()
      .regex(/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/)
      .required(),
  }).validate({
    birth_date: "1986-04-05",
  })
);
