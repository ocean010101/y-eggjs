const Koa = require('koa');

class Yegg {
    constructor(options) {
        this.$app = new Koa(options);
    }
    listen(port) {
        this.$app.listen(port, () => {
            console.log(`server启动， 监听端口为${port}`);
        })
    }
}

module.exports = Yegg;