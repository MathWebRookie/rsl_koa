const router = require('koa-router')()
const userController = require('../controllers/user/userController');

router.prefix('/users')

// 获取所有用户信息
router.get('/', userController.getUsers)
// 新增用户信息
router.post('/', userController.createUser);
// 获取id用户信息
router.get('/:id', userController.getUserById);
// 删除id用户信息
router.delete('/:id', userController.deleteUserById);

module.exports = router
