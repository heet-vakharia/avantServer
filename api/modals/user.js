import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userid: {
    type: String,
    unique: true,
  },
  password: String,
  email: {
    type: String,
    unique: true,
  },
});
const User = mongoose.model("user", userSchema);
export default User;
