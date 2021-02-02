// import specific methods from mongoose
const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const ReplySchema = new Schema (
    {
        // set custom id to avoid confusion with parent comment _id
        // I have no idea what this is doing
        replyId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        replyBody: {
            type: String
        },
        writtenBy: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
)

const CommentSchema = new Schema({
    writtenBy: {
        type: String
    },
    commentBody: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    replies: [ReplySchema]
    },
    {
        toJSON : {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// get total count of replies and on retrieval
// what is 'replyCount' ?
// what is this?
// what is replies?
CommentSchema.virtual('replyCount').get(function() {
    return this.replies.length;
})

// create the Comment model using the CommentSchema
const Comment = model("Comment", CommentSchema);

module.exports = Comment;