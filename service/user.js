const delay = (data, tick) => new Promise(resolve => {
    setTimeout(() => {
        resolve(data);
    }, tick);
});

// 可复用的服务 一个同步，一个异步
module.exports = {
    getUserName() {
        return delay('yegg', 1000);
    },
    getUserInfo() {
        return 20;
    }
};