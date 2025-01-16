const router = require('koa-router')()
const userController = require('../controllers/user/userController');

router.prefix('/users')

router.get('/', userController.getUsers)

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);

module.exports = router
