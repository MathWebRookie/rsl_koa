const mongoose = require('mongoose');

// 定义用户 Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number');
            }
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// 指定集合名称为 'users'
const User = mongoose.model('User', userSchema, 'users');

module.exports = User;