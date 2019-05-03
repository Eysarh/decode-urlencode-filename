const decode = require('urldecode')
const fs = require("fs")
const main = folder => {
  fs.readdir(folder, (err, files) => {
    if (err) {
      console.log(err)
      return
    }
    files.forEach(file => {
      fs.rename(`${folder}\\${file}`, `${folder}\\${decode(file)}`, function(err) {
        if ( err ) console.log('ERROR: ' + err)
      })
    })
  })
}
main(process.argv[2])
