const fs = require('fs')
const path = require('path')

const mainPath = path.resolve(__dirname, 'text.txt')
const rs = fs.createReadStream(mainPath)

rs.on('error', () => {
console.log(error.message) 
})

rs.on('open', () => {
	rs.pipe(process.stdout) 
	})