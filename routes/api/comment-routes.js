const router = require('express').Router();
// import controller objects
const { addComment, removeComment } = require('../../controllers/comment-controller');

// POST at /api/comments/:pizzaId
router
    .route('/:pizzaId')
    .post(addComment);

//  GET pizzaId and commentId /api/comments/:pizzaId/:commentId
router
    .route('/:pizzaId/:commentId')
    .delete(removeComment);

module.exports = router;