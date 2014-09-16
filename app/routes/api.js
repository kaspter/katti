var port = "3004";


exports.home = function(req,res){
	if (req.session.user == null) {
		logger.info("Visiting Home Page : User not logged in..");
		res.status(200).json( {
			islogin : 0,
			build : svnrevision,
			username : req.session.roomname
		});
	} else {
		logger.info("Visiting Home Page: Logged in user- "+req.session.user.user);
		res.status(200).json( {
			islogin : 1,
			build : svnrevision,
			username : req.session.user.user
		});
	}
};

