const Koa = require('koa');
const { initRouter } = require('./loader');
class Yegg {
    constructor(options) {
        this.$app = new Koa(options);
        this.$router = initRouter();
        this.$app.use(this.$router.routes());
    }
    listen(port) {
        this.$app.listen(port, () => {
            console.log(`server启动， 监听端口为${port}`);
        })
    }
}

module.exports = Yegg;