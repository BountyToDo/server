const Users = require('../models/Users')
const jwt = require('jswonwebtoken')
const FB = require('fb')

class Users {

	static loginFB(req,res){
		FB.setAccessToken(req.headers.fbtoken)
		FB.api('/me',{fields:'name,email,picture'})
		.then(data=>{
			let dataUser = {
				name : data.name,
				email : data.email,
				picture : data.picture.data.url
			}
			Users.findOne(dataUser)
			.then(user =>{
				if(user) {
					jwt.sign({user},'secret key',(err,token)=>{
						res.status(200).json({
							message : `welcome ${user.name}`,
							name : user.name,
							email : user.email,
							profileUrl : user.picture,
							apptoken : token
						})
					})
				} else {
					Users.create(dataUser)
					.then(createdUser=>{
						let user = createdUser
						jwt.sign({user},'secret key',(err,token)=>{
							res.status(200).json({
								message: `welcome ${user.name}`,
								apptoken: token
							})
						})
					})
					.catch(err=>{
						res.status(500).json({
							mesage:'something went wrong',
							err
						})
					})
				}
			})
		})
	}
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