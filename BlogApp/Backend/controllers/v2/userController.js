exports.createUserV2 = (req, res) => {
  const { name, email, password, phone } = req.body;

  res.json({
    success: true,
    message: "V2 User created with phone number",
    data: { name, email, phone }
  });
};
