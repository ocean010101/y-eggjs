const Koa = require('koa');
const { initRouter, initController, initService, loadConfig, initSchedule } = require('./loader');
class Yegg {
    constructor(options) {
        this.$app = new Koa(options);
        loadConfig(this);
        this.$services = initService(this);
        this.$controllers = initController();
        this.$router = initRouter(this);
        this.$app.use(this.$router.routes());
        initSchedule();
    }
    listen(port) {
        this.$app.listen(port, () => {
            console.log(`server启动， 监听端口为${port}`);
        })
    }
}

module.exports = Yegg;