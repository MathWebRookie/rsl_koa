const userService = require("../../services/userService");

class UserController {
  // 创建用户
  async createUser(ctx) {
    try {
      const userData = ctx.request.body;
      // const { type, url, params, headers } = ctx.request.body;
      await userService.createUser(userData);
      ctx.body = {
        success: true,
        code: 200,
        data: '用户创建成功',
      };
    } catch (error) {    
      ctx.throw(500, error.message);
    }
  }

  // 删除用户
  async deleteUserById(ctx) {
    try {
      const users = await userService.deleteUser();
      ctx.body = {
        success: true,
        data: users,
      };
    } catch (error) {
      ctx.throw(500, error.message);
    }
  }

  // 获取所有用户
  async getUsers(ctx) {
    try {
      const users = await userService.getUsers();
      ctx.body = {
        success: true,
        code: ctx.response.status,
        data: users,
      };
    } catch (error) {
      ctx.throw(500, error.message);
    }
  }

  // 根据ID获取用户
  async getUserById(ctx) {
    try {
      const { id } = ctx.params;
      const user = await userService.getUserById(id);
      if (!user) {
        ctx.throw(404, "User not found");
      }
      ctx.body = {
        success: true,
        data: user,
      };
    } catch (error) {
      ctx.throw(error.status || 500, error.message);
    }
  }

  // 更新用户
  async updateUser(ctx) {
    try {
      const { id } = ctx.params;
      const updateData = ctx.request.body;
      const user = await userService.updateUser(id, updateData);
      if (!user) {
        ctx.throw(404, "User not found");
      }
      ctx.body = {
        success: true,
        data: user,
      };
    } catch (error) {
      ctx.throw(error.status || 500, error.message);
    }
  }
}

module.exports = new UserController();
