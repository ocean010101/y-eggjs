module.exports = {
    db: {
        dialect: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "123456",
        database: "egg_db"
    },
    middleware: ['logger'],//以数组形式，保证执行顺序
};