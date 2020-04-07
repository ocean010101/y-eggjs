module.exports = {
    index: async app => {
        const name = await app.$services.user.getUserName()
        app.ctx.body = `${name} 的项目首页`;
    },
    detail: app => {
        app.ctx.body = "项目详情页";
    }
}