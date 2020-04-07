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

function initRouter(app) { //因为有的route文件需要调用应用实例中的$controllers对象，所以initRouter 函数需要把应用实例作为参数。
    const router = new Router();
    load("routes", (filename, routes) => { //("index", { "get /": async ctx => { ctx.body = "项目首页"; }, "get /detail": ctx => { ctx.body = "项目详情页"; } })
        const prefix = filename === "index" ? "" : `/${filename}`; // "" || "/user"
        /*
            routes 的格式有两种：
            第一种：对象类型
                {
                    "get /": async ctx => {ctx.body = "用户首页";},
                    "get /info": ctx => {ctx.body = "用户信息";}
                }
            第二种：函数类型
                app => ({
                    "get /": app.$controllers.home.index,
                    "get /detail": app.$controllers.home.detail
                });
        */
        routes = typeof (routes) === 'function' ? routes(app) : routes;
        //解析文件内容，注册路由 eg: router.get('/', async ctx => {ctx.body = "项目首页";});
        Object.keys(routes).forEach(key => { //key=> "get /"
            const [method, routerPath] = key.split(' ');//["get", "/"]
            router[method](prefix + routerPath, routes[key]);
        })
    })
    return router;
}

function initController() {
    const controllers = {};
    load("controller", (filename, controller) => { //("home", { index: async ctx => { ctx.body = "项目首页"; }, detail: ctx => { ctx.body = "项目详情页"; } })
        controllers[filename] = controller; //controllers{index}
    })
    return controllers;
}
module.exports = { initRouter, initController };