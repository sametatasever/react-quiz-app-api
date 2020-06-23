const Joi = require("@hapi/joi");

const registerSchema = Joi.object({
  name: Joi.string()
    .trim()
    .regex(/^([a-zA-Z0-9ğüşöçİĞÜŞÖÇ]+\s)*[a-zA-Z0-9ğüşöçİĞÜŞÖÇ]+$/)
    .min(3)
    .max(30)
    .trim()
    .required(),
  mail: Joi.string()
    .email()
    .trim()
    .regex(/\S+@\S+\.\S+/)
    .required(),
  password: Joi.string().trim().regex(/^\S*$/).min(6).required(),
});

const loginSchema = Joi.object({
  mail: Joi.string()
    .email()
    .trim()
    .regex(/\S+@\S+\.\S+/)
    .required(),
  password: Joi.string().trim().regex(/^\S*$/).min(6).required(),
});

const quizSchema = Joi.object({
  author: Joi.string()
    .trim()
    .regex(/^([a-zA-Z0-9ğüşöçİĞÜŞÖÇ]+\s)*[a-zA-Z0-9ğüşöçİĞÜŞÖÇ]+$/)
    .min(3)
    .max(30)
    .trim()
    .required(),
  description: Joi.string().trim().required(),
  questions: Joi.array()
    .items(
      Joi.object({
        description: Joi.string().trim().required(),
        answers: Joi.array().items(
          Joi.object({
            index: Joi.number().required(),
            description: Joi.string().trim().required(),
          })
        ),
        answerIndex: Joi.number().required(),
      })
    )
    .required(),
});

module.exports = {
  registerSchema,
  loginSchema,
  quizSchema,
};
