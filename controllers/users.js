const Users = require('../models/Users')

class Users {
	static viewAll(req,res){
		Users.find()
		.exec()
		.then(data=>{
			res.status(200).json({
				message:'this is list of users',
				data
			})
		})
		.catch(err=>{
			res.status(500).json({
				message:'something went wrong',
				err
			})
		})
	}
}