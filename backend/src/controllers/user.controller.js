import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const isExisting = await User.findOne({ email: email.toLowerCase() });
    if (isExisting) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = await User.create({
      username,
      email: email.toLowerCase(),
      password,
      loggedIn: false,
    });
    res.status(201).json({ message: "User created successfully", user: { id: newUser._id, email: newUser.email, username: newUser.username } });
  } catch (error) {
    res.status(500).json({ message: `server error : ${error.message}` });
  }
}
export { registerUser };