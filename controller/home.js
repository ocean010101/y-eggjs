module.exports = {
    index: async ctx => {
        ctx.body = "项目首页";
    },
    detail: ctx => {
        ctx.body = "项目详情页";
    }
}