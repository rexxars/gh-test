const fs = require('fs')
const path = require('path')

const argv = process.argv.map(thing => thing.split('=')).flat()
const dirAt = argv.indexOf('--dir')
const dir = dirAt === -1 ? process.cwd() : path.resolve(process.cwd(), argv[dirAt + 1])

console.log('We are running!')
console.log('Current working dir: %s', process.cwd())
console.log('Directory: %s\n', dir)

console.log('Files/directories in here:')
console.log(fs.readdirSync(dir).map(file => ` - ${file}`).join('\n'))
console.log('')
