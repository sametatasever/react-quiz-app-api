const express = require("express");
const moment = require("moment");
moment.locale("tr");

const Quiz = require("../../models/Quiz");

const router = express.Router();

const { isLoggedIn } = require("../oturum/middlewares");

const { quizSchema } = require("../../schemas");

router.get("/", async (req, res, next) => {
  const { q } = req.query;

  if (q) {
    const quizzes = await Quiz.find({
      description: { $regex: q, $options: "i" },
    });
    res.json(quizzes);
  }
  const quizzes = await Quiz.find({});
  res.json(quizzes);
});

router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    const validQuiz = await quizSchema.validateAsync(req.body);

    const newQuiz = new Quiz(req.body);
    newQuiz.createdAt = moment().format("Do MMMM YYYY, h:mm:ss a");
    //burda kaldık
    await newQuiz.save();
    res.json({
      newQuiz,
    });
  } catch (err) {
    next(err);
  }
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: "test " + id,
  });
});

/*router.post("/signup", (req, res) => {
  res.json(req.body);
});*/

module.exports = router;