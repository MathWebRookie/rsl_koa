const router = require('koa-router')()
const userController = require('../controllers/user/userController');

router.prefix('/users')

router.get('/', userController.getRequest)

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/', userController.createUser);
router.get('/:id', userController.getUsers);

module.exports = router
