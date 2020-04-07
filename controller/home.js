module.exports = {
    index: async app => {
        // const name = await app.$services.user.getUserName()
        // app.ctx.body = `${name} 的项目首页`;
        app.ctx.body = await app.$model.user.findAll();
    },
    detail: app => {
        app.ctx.body = "项目详情页";
    }
}