module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			csskit:{
				options: {
					banner: '/** \n <%=pkg.name%> <%=pkg.version%>\n Zepto + Scroller + Kui \n Author:<%=pkg.author%>\n HomePage:<%=pkg.homepage%>\n */\n',
					paths: ['assets/css']
				 },
				 files:{
					 'css-kit.css':'src/index.less',
				 }
			}
		},
		cssmin: {
			options: {
				keepSpecialComments: 0
			},
			csskit: {
				files:{
					'css-kit.min.css': ['./css-kit.css']
				}
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	//注册任务
	grunt.registerTask('default', ['less','cssmin:csskit']);
}