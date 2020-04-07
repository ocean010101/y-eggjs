module.exports = async (ctx, next) => {
    // 来到中间件，洋葱圈左边
    const start = new Date();
    await next() // 进入其他中间件
    // 再次来到中间件，洋葱圈右边
    const duration = new Date() - start;
    console.log(ctx.method + " " + ctx.path + " " + ctx.status + " " + duration + "ms");
};