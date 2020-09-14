const deleteRoute = (req, res, User, sendEmail) => {
  const { id } = req.body;
  User.findByIdAndDelete(id, (err, msg) => {
    if (err) {
      res.status(500).json("User Not Deleted");
    } else {
      const { email, userid } = msg;
      // sendEmail(
      //   msg.email,
      //   `${userid} your account has been sucessfully deleted`
      // );
      res.status(200).json(msg);
    }
  });
};
export default deleteRoute;
