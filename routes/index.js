module.exports = {
    "get /": async ctx => {
        ctx.body = "项目首页";
    },
    "get /detail": ctx => {
        ctx.body = "项目详情页";
    }
}