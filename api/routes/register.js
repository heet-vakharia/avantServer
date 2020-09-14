const registerRoute = (req, res, User, bcrypt, sendEmail) => {
  const { userid, email, password } = req.body;
  if (userid && email && password) {
    var encryptedPassword = bcrypt.hashSync(password, 8);
    User.create({ userid, email, password: encryptedPassword }, (err, user) => {
      if (err) {
        res.status(405).status("Plz enter username or email");
      } else {
        res
          .status(201)
          .json({ id: user._id, email: user.email, userid: user.userid });
        // sendEmail(email, `Thank you for registering ${userid}`);
      }
    });
  } else {
    res.status(400).json({ msg: "Plz provide all information" });
  }
};
export default registerRoute;
