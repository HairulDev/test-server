
const helper = require("#lib/response");
const { supabase } = require("#services/supabase.service");
const { isEmpty } = require("#utils/string");


const viewAccountByEmail = async (req, res) => {
  try {
    const { email } = req.body;

    const { data: account, error: errorAccount } = await supabase
      .from('profile')
      .select('*')
      .eq('email', email)
      .single();
    if (isEmpty(account))
      return helper.successHelper(req, res, 200, {
        account,
        success: false,
      });

    return helper.successHelper(req, res, 200, {
      account,
      success: true,
    });
  } catch (error) {
    return helper.errorHelper(req, res, 500, undefined, error);
  }
};

module.exports = {
  viewAccountByEmail
}
