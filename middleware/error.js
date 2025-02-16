module.exports = () => {
    return async (ctx, next) => {
        try {
            await next();
        } catch (err) {
            ctx.status = err.status || 500;
            ctx.body = {
                success: false,
                status: ctx.status,
                message: err.message || 'Internal server error',
                ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
            };
            ctx.app.emit('error', err, ctx);
        }
    };
};