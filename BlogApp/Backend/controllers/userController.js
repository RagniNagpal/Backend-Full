exports.createUserV1 = (req, res) => {
  res.json({ success: true, message: "User created", data: req.body });
};
