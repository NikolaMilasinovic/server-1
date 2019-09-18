const getLink = (req,res,db) => {
	let text = req.body.updateText;
	let sql = `UPDATE tekst1 SET text='${text}' WHERE link = '${req.params.id}'`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(text);
        console.log(result);
        res.status(200).json(result);
    });

}

module.exports = {
	getLink:getLink
}