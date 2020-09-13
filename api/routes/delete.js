const deleteRoute = (req, res, User) => {
  const { id } = req.body;
  User.findByIdAndDelete(id, (err, msg) => {
    if (err) {
      res.status(500).json("User Not Deleted");
    } else {
      res.status(200).json(msg);
    }
  });
};
export default deleteRoute;
