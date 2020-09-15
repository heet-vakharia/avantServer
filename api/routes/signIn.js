const signInRoute = async (req, res, User, bcrypt, sendEmail) => {
  const { userUserid, userPassword } = req.body;
  if (userUserid && userPassword) {
    await User.findOne({ userid: userUserid }, (err, user) => {
      if (err || !user) {
        res.status(401).json("Wrong Username");
      } else {
        const { userid, password, _id, email } = user;
        bcrypt.compare(userPassword, password, (err, resp) => {
          if (resp) {
            // sendEmail(email, `A new signin from your account`);
            res.status(302).json({ userid, email, id: _id });
          } else {
            res.status(404).json({ err: "Invalid Password" });
          }
        });
      }
    });
  } else {
    res.status(400).json({ msg: "Plz provide all information" });
  }
};
export default signInRoute;
