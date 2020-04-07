const path = require('path');
const fs = require('fs');
const Router = require('koa-router');

//读取指定目录下文件
function load(dir, cb) {
    //获取文件夹绝对路径
    const dirPath = path.resolve(__dirname, dir);
    //读取文件夹下文件
    const files = fs.readdirSync(dirPath); //files => [ 'index.js', 'user.js' ]

    //遍历文件夹下所有文件
    files.forEach(filename => {
        // 去掉后缀
        filename = filename.replace(".js", ""); //index.js=>index
        // 导入文件
        const file = require(dirPath + "/" + filename);
        // 处理逻辑
        cb(filename, file);
    })
}

function initRouter() {
    const router = new Router();
    load("routes", (filename, routes) => { //("index", { "get /": async ctx => { ctx.body = "项目首页"; }, "get /detail": ctx => { ctx.body = "项目详情页"; } })
        const prefix = filename === "index" ? "" : `/${filename}`; // "" || "/user"

        //解析文件内容，注册路由 eg: router.get('/', async ctx => {ctx.body = "项目首页";});
        Object.keys(routes).forEach(key => { //key=> "get /"
            const [method, routerPath] = key.split(' ');//["get", "/"]
            router[method](prefix + routerPath, routes[key]);
        })
    })
    return router;
}

module.exports = { initRouter };