const helper = require("#lib/response");
const { supabase } = require("#services/supabase.service");

const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error)
      return helper.errorHelper(
        req,
        res,
        500,
        "You dont have Authorized networks",
        error
      );

    return helper.successHelper(req, res, 200, {
      data,
      success: true,
      message: "Login successfully",
    });
  } catch (error) {
    return helper.errorHelper(
      req,
      res,
      500,
      "You dont have Authorized networks",
      error
    );
  }
};

const signup = async (req, res) => {
  const body = req.body;
  const { email, password, firstName, lastName, } = body;

  try {
    if (!email || !password || !firstName || !lastName) {
      res.status(404).json({ message: "Lengkapi semua field" });
    }

    const { data, error: errorSignup } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    if (errorSignup) {
      return helper.errorHelper(req, res, 500, undefined, errorSignup);
    }

    const result = {
      name: `${firstName} ${lastName}`,
      email: email,
      users_id: data?.user?.id,
    };
    await supabase.from('profile').insert(result);

    res.status(201).json(data);

  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};


module.exports = {
  signin,
  signup,
};
