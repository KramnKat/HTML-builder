const { readdir, stat } = require('fs')
const path = require('path')

const mainPath = path.resolve(__dirname, 'secret-folder')

readdir(mainPath, {withFileTypes: true}, (error, data) => {
	if (error) {
		console.log(error)
	} else {
		data.forEach(el => {
			if(el.isFile) {
				const [name, ext] = [path.parse(el.name).name, path.parse(el.name).ext]
				stat(path.join(mainPath, el.name), (error, stats) => {
					if (error) {
						return console.log(error.message)
					}
					const size = stats.size
					console.log(`${name} - ${ext.slice(1)} - ${(size / 1024).toFixed(1)}kb`)
				})
			}
		})
	}
})