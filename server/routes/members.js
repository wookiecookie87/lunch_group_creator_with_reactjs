const express = require('express');
const router = express.Router();
const Members = require('../models/members');

router.get('/', (req, res, next) => {
	Members.find((err, members) => {
		if(err) return res.status(500).json({message: 'DB Error', detail: err});
		res.json(members);
	});
})									
.post('/', (req, res, next) => {
	Members.create(req.body, (err, post) => {
		if (err) return res.status(500).json({message: 'DB Error', detail: err});
		Members.find((err, members) => {
			if(err) returnres.status(500).json({message: 'DB Error', detail: err});
			res.json(members);
		});
	})
})
.delete('/:id', (req, res, next) => {
	Members.findByIdAndRemove(req.params.id, req.body, (err, post) => {
		if (err) return res.status(500).json({message: 'DB Error', detail: err});
		Members.find((err, members) => {
			if(err) return res.status(500).json({message: 'DB Error', detail: err});
			res.json(members);
		});
	});
});

module.exports = router;