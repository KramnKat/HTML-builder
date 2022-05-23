const fs = require('fs')
const path = require('path')

const mainPath = path.resolve(__dirname, 'files')
const mainPathCopy = path.join(__dirname, 'files-copy')


fs.rm(mainPathCopy, {recursive: true, force: true}, () => {
	fs.mkdir(mainPathCopy, {recursive: true}, (error) => {
		if(error) {
			console.log(error)
		}
	})
	copyDirectory(mainPath, mainPathCopy)
})

function copyDirectory(fromPath, toPath) {
	fs.readdir(mainPath, {withFileTypes: true}, (error, data) => {
		if(error) {
			console.log(error)
		} else {
			data.forEach(elem => {
				if(elem.isDirectory()) {
					fs.mkdir(path.resolve(toPath, elem.name), {recursive: true}, (error) => {
						console.log(error)
					})
				} else {
					fs.createReadStream(path.resolve(fromPath, elem.name), 'utf-8').pipe(fs.createWriteStream(path.resolve(toPath, elem.name)))
				}
			})
		}
	})
}
