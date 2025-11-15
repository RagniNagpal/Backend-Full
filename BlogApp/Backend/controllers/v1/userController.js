exports.createUserV1 = (req, res) => {
  res.json({
    success: true,
    message: "V1 User created",
    data: req.body
  });
};
