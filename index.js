const Joi = require("joi");

const log = (condition, { error, value }) => {
  console.log();
  console.log(condition);
  if (error) console.log(error.message);
  else console.log(value);
};

log(
  "( ) See how joi handle date-only string with date() validation",
  Joi.object({
    birth_date: Joi.date().required(),
  }).validate({
    birth_date: "1986-04-05",
  })
);

log(
  "(X) It has NOT worked for date-only",
  Joi.object({
    birth_date: Joi.date().required(),
  }).validate({
    birth_date: "1986-04-05T03:00:00.000Z",
  })
);

log(
  "(V) It has worked, validation has worked, invalid date-only input since it has time",
  Joi.object({
    birth_date: Joi.string()
      .regex(/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/)
      .required(),
  }).validate({
    birth_date: "1986-04-05T03:00:00.000Z",
  })
);

log(
  "(V) It has worked, valid date-only input",
  Joi.object({
    birth_date: Joi.string()
      .regex(/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/)
      .required(),
  }).validate({
    birth_date: "1986-04-05",
  })
);

log(
  "(V) It has worked, date with time set to zero",
  Joi.object({
    birth_date: Joi.string()
      .regex(
        /^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])[T][0][0][:][0][0][:][0][0][.][0][0][0][Z]$/
      )
      .required(),
  }).validate({
    birth_date: "1986-04-05T00:00:00.000Z",
  })
);

log(
  "(V) It has worked, it didn't allow date-only string",
  Joi.object({
    birth_date: Joi.string()
      .regex(
        /^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])[T][0][0][:][0][0][:][0][0][.][0][0][0][Z]$/
      )
      .required(),
  }).validate({
    birth_date: "1986-04-05",
  })
);
