
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.partial = function (req, res) {
  res.render('partials/' + req.params.name);
};

exports.resetpassword = function(req,res){
  req.session.reset = { user:req.query["u"]};
  res.redirect('/#'+req.originalUrl);
};
