const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Answer = new Schema({
  index: { type: Number, required: "Cevap İndexi Gereklidir" },
  description: { type: String, required: "Cevap Açıklaması Gerekli" },
});

const Question = new Schema({
  description: { type: String, required: "Açıklama Gerekli" },
  answers: [Answer],
  answerIndex: { type: Number, required: "Cevap İndexi Gerekli" },
});

const quizSchema = new Schema({
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: "Oluşturan Gereklidir",
  },
  description: { type: String, required: "Mail Gereklidir" },
  questions: [Question],
  createdAt: { type: String, required: "Oluşturma Tarihi Gereklidir" },
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
