import express from "express";
import jwt from "jsonwebtoken";
import authSeller from "../middlewares/authSeller.js";
const router = express.Router();

// ✅ LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (
    email === process.env.SELLER_EMAIL &&
    password === process.env.SELLER_PASSWORD
  ) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("sellerToken", token, {
      httpOnly: true,
      secure: false, // true in production
      sameSite: "lax",
    });

    return res.json({ success: true, message: "Login successful" });
  } else {
    return res.json({ success: false, message: "Invalid credentials" });
  }
});

// ✅ CHECK AUTH
router.get("/is-auth", authSeller, (req, res) => {
  return res.json({ success: true });
});

// ✅ LOGOUT
router.post("/logout", (req, res) => {
  res.clearCookie("sellerToken");
  return res.json({ success: true, message: "Logged out" });
});

export default router;