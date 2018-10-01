module.exports = {
    server: {
        port: 8080
    },
    routes: [
        {path: "/one", controller: "./external/one"},
        {path: "/two", controller: "./external/two"}
    ]
}