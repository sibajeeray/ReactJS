var path = require("path");
var copy = require('copy');

//This configuration will create bundle.js in dist/app from src/app/index.js 
var config = {
    mode:"none",
    entry: __dirname+"/src/app/index.js",
    output: {
        path: __dirname+"/dist/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                include: __dirname+"/src",
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    }
};
 
//To copy every html file of src to dist folder. At the end Dist folder files are gonna execute on server.
copy(__dirname+'/src/*.html', 'dist', function(err, file) {
    if (err) throw err;
    
  });

module.exports = config;
