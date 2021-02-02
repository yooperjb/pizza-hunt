const router = require('express').Router();
// import controller objects
const { addComment, removeComment, addReply, removeReply } = require('../../controllers/comment-controller');

// POST at /api/comments/:pizzaId
router
    .route('/:pizzaId')
    .post(addComment);

//  PUT & DELETE comment route /api/comments/:pizzaId/:commentId
router
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment);

// DELETE reply? route /api/comments/:pizzaId/:commentId/:replyId
router
    .route('/:pizzaId/:commentId/:replyId')
    .delete(removeReply);

module.exports = router;