const Joi = require("joi");

const data = {
    birth_date: "1986-04-05T03:00:00.000Z"
}

const jo = Joi.object({  
  birth_date: Joi.date().required()  
});

const { error, value } = jo.validate(data, {
    abortEarly: false
});

if (error) console.error(error);
else console.log(value);
