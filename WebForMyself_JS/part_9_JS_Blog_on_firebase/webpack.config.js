// Writing on NodeJS platform here. So have additional features
const HtmlWebpackPlugin = require('html-webpack-plugin'); // require from node modules

module.exports = {
    // entry point of our app
    entry: ['@babel/polyfill', './src/index.js'],
    // webpack output - result of webpack's work
    output: {
        path: __dirname + '/dist', // __dirname current folder's path
        filename: 'bundle.js' // scripts + modules... Good practice to call it bundle
    },
    devServer: {
        contentBase: __dirname + '/dist', //path to folder where we need to run our dev server
        port: 4321
    },
    // to manipulate HTML (index.html), and add our bundle to it we need HtmlWebpackPlugin
    // plugins: [new HtmlWebpackPlugin()] // generates a new index.html. Like a did with documentation
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    resolve: {
        extensions: ['.js']
    }, 
    module: {
        rules: [// All files with JS extension, except files in node_modules, should be processed with babel-loader
            { // https://github.com/babel/babel-loader
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}
