const ThreadsPlugin = require('threads-plugin')

module.exports = {
  configureWebpack: {
    resolve: {
      symlinks: false
    },
    plugins: [
      new ThreadsPlugin()
    ]
  }
}
