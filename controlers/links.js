const getLinks = (req,res,db) => {
	let sql = "SELECT * FROM tekst1";
	db.query(sql, (error, result) => {
		if(error) throw error;
		else{
			console.log(result);
        	res.status(200).json(result);
		}
	});
}

module.exports = {
	getLinks:getLinks
}