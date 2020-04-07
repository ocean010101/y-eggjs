module.exports = {
    "get /": async app => {
        const name = await app.$services.user.getUserName();
        app.ctx.body = "用户名字：" + name;
    },
    "get /info": app => {
        app.ctx.body = "用户年龄：" + app.$services.user.getUserInfo();
    }
};