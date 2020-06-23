const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: "İsim Gereklidir" },
  mail: { type: String, required: "Mail Gereklidir" },
  password: { type: String, required: "Şifre Gereklidir" },
  quizzes: { type: Array, default: [] },
  createdAt: { type: String, default: Date.now() },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
