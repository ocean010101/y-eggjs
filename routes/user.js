module.exports = {
    "get /": async ctx => {
        ctx.body = "用户首页";
    },
    "get /info": ctx => {
        ctx.body = "用户信息";
    }
}