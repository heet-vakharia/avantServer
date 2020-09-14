const updateRoute = async (req, res, User, bcrypt, sendEmail) => {
  const { item } = req.params;
  const { id, newItem } = req.body;
  let newValue = newItem;
  if (item === "password") {
    newValue = bcrypt.hashSync(newItem, 8);
  }
  await User.findByIdAndUpdate(
    id,
    {
      [item]: newValue,
    },
    { new: true },
    (err, msg) => {
      if (err || !msg) {
        res.status(500).json("Server Err");
      } else {
        const { email, userid, _id } = msg;
        // sendEmail(email, `Your ${item} has been sucessfully change`);
        res.status(200).json({ email, userid, _id });
      }
    }
  );
};

export default updateRoute;
