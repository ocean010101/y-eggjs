module.exports = app => ({
    "get /": app.$controllers.home.index,
    "get /detail": app.$controllers.home.detail
});