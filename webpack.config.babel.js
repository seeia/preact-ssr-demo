const path = require('path')
const webpack= require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin') // 分离css文件
const HtmlWebpackPlugin = require('html-webpack-plugin') // 简化HTML文件的创建

const ENV = process.env.NODE_ENV || 'development'
const renderMode = process.env.Render_Mode || 'client'
const CSS_MAPS = ENV!=='production';
const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

console.log('ENV', ENV)
function getEntryFiles (){
	if(ENV === 'development'){
		return ['./main.js', hotMiddlewareScript]
	}else{
		return './main.js'
	}
}

module.exports = {
  context: path.resolve(__dirname, "src/index"),
	entry:  getEntryFiles(),
  output: {
    path: path.resolve(__dirname, "public/dist"),
		publicPath: '/',
		filename: 'index_bundle.js'
	},
  resolve: {
		extensions: ['.jsx', '.js', '.json', '.less'],
		modules: [
			path.resolve(__dirname, "src/lib"),
			path.resolve(__dirname, "node_modules"),
			'node_modules'
		],
		alias: {
			'@': path.join(__dirname, '..', 'src'),
			components: path.resolve(__dirname, "src/index/components"),    // used for tests
			style: path.resolve(__dirname, "src/index/style"),
			'react': 'preact-compat',
			'react-dom': 'preact-compat'
		}
	},
  module: {
    rules: [
      {
				test: /\.js?$/,
				exclude: path.resolve(__dirname, 'src'),
				enforce: 'pre',
				use: 'source-map-loader'
			},
      {
        test: /js$/,
        exclude: /node_modules/,  // 排除某些文件夹
				use: 'babel-loader'
      },
      {
				test: /\.(xml|html|txt|md)$/,
				use: 'raw-loader'
			},
      {
				test: /\.json$/,
				use: 'json-loader'
      },
      {
				// Transform our own .(less|css) files with PostCSS and CSS-modules
				test: /\.(less|css)$/,
				include: [path.resolve(__dirname, 'src/components')],
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: { modules: true, sourceMap: CSS_MAPS, importLoaders: 1, minimize: true }
						},
						{
							loader: `postcss-loader`,
							options: {
								sourceMap: CSS_MAPS,
								plugins: () => {
									autoprefixer({ browsers: [ 'last 2 versions' ] });
								}
							}
						},
						{
							loader: 'less-loader',
							options: { sourceMap: CSS_MAPS }
						}
					]
				})
			},
			{
				test: /\.(less|css)$/,
				exclude: [path.resolve(__dirname, 'src/components')],
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: { sourceMap: CSS_MAPS, importLoaders: 1, minimize: true }
						},
						{
							loader: `postcss-loader`,
							options: {
								sourceMap: CSS_MAPS,
								plugins: () => {
									autoprefixer({ browsers: [ 'last 2 versions' ] });
								}
							}
						},
						{
							loader: 'less-loader',
							options: { sourceMap: CSS_MAPS }
						}
					]
				})
			},
    ]
  },
  plugins: ENV === 'development' ? [new HtmlWebpackPlugin(), new webpack.HotModuleReplacementPlugin()] : [new HtmlWebpackPlugin()],
  devtool: ENV==='production' ? 'source-map' : 'cheap-module-eval-source-map',
  stats: { colors: true }
}
