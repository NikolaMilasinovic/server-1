const handleSignin = (req,res,db) => {
	const {username, password} = req.body;
	if(!username || !password){
		return res.status(400).json("Incorect form submission")
	}
	let sql = `SELECT * FROM login WHERE username = '${username}'
		AND password = '${password}'`;
	db.query(sql, (error, result) => {
		if(result.length < 1){
			return res.status(400).json("Wrong credentials");
		}else{
			return res.status(200).json(result);
		}

	})
}

module.exports = {
	handleSignin:handleSignin
}