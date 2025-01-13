const User = require('../models/userModel');

class UserService {
    // cs
    async getRequestdata() {
        return await User.getRequestmodel();
    }

    // 创建用户
    async createUser(userData) {
        return await User.create(userData);
    }

    // 获取所有用户
    async getUsers() {
        return await User.find().select('-password');
    }

    // 根据ID获取用户
    async getUserById(id) {
        return await User.findById(id).select('-password');
    }

    // 更新用户
    async updateUser(id, updateData) {
        return await User.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true
        });
    }

    // 删除用户
    async deleteUser(id) {
        return await User.findByIdAndDelete(id);
    }

    // 根据条件查找用户
    async findUsers(query) {
        return await User.find(query).select('-password');
    }
}

module.exports = new UserService();