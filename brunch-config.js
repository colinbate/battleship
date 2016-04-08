exports.config = {
  files: {
    javascripts: {
      joinTo: {
        'app.js': 'app/**/*',
        'vendor.js': 'node_modules/**/*'
      },
      order: {
        after: /\.less$/
      }
    },
    stylesheets: {
      joinTo: 'app.css'
    },
    templates: {
      joinTo: 'app.js'
    }
  },
  plugins: {
    less: {
      modules: true
    }
  }
};
