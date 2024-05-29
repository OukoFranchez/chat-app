import User from "../models/user.models.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

	if (password !== confirmPassword) {
		return res.status(400).json({error: "Password don't match"});
	}

	const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: 'Username already exists' });
    }


	const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
	const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

	const newUser = new User ({
		fullName,
		username,
		password,
		profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
		gender
	})

	await newUser.save();

	res.status(201).json({
		_id: newUser._id,
		fullName: newUser.fullName,
		username: newUser.username,
		profilePic: newUser.profilePic,
		gender: newUser.gender
	})
  } catch (error) {
	console.log("Error in signup controller", error.message);
	res.status(500).json({error:"Internal server error"})
  }
};

export const login = (req, res) => {
  console.log('LoginUser');
};

export const logout = (req, res) => {
  console.log('LogoutUser');
};
