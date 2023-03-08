const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      required: true,
      default: "https://cdn-icons-png.flaticon.com/512/3146/3146501.png",
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", UserSchema);
module.export = User;
