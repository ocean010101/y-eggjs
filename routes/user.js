module.exports = {
    "get /": async app => {
        app.ctx.body = await app.$services.user.getUsers();
    },
    "get /info": app => {
        app.ctx.body = "用户年龄：" + app.$services.user.getUserInfo();
    }
};