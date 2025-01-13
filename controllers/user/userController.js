const userService = require("../../services/userService");

class UserController {
  // cs
  async getRequest(ctx) {
    try {
      ctx.status = 200;
      const data = await userService.getRequestdata();
      ctx.body = {
        status: ctx.response.status,
        success: true,
        data,
      };
    } catch (error) {
      ctx.throw(500, error.message);
    }
  }

  // 创建用户
  async createUser(ctx) {
    try {
      const userData = ctx.request.body;
      console.log(userData);
      const user = await userService.createUser(userData);
      ctx.status = 201;
      ctx.body = {
        success: true,
        data: user,
      };
    } catch (error) {
      ctx.throw(400, error.message);
    }
  }

  // 获取所有用户
  async getUsers(ctx) {
    try {
      const users = await userService.getUsers();
      ctx.body = {
        success: true,
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
