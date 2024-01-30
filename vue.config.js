module.exports = {
    devServer: {
        proxy: {
            "^/analytic": "http://localhost:3000/api"
        }
    }
}