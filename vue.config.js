module.exports = {
    devServer: {
        proxy: {
            "^/api": "http://localhost:3000/api/analytic"
        }
    }
}