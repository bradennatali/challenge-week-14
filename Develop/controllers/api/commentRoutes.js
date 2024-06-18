const router = require('express').Router();
const { Comment } = require('../../models/');

router.post('/', async (req, res) => {
  try {
    const comment = await Comment.create({
      ...req.body,
      userId: req.session.user_id,
    });
    res.json(comment);
  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;
