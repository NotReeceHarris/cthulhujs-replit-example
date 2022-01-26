// Import the Cthulhu module
const cthulhu = require('cthulhu.js')

// Serve the Webpage '/' allowing only 'GET' and 'POST' requests
cthulhu.server.serve('/', ['GET'], function (req, res){
    res.write('Hello World')   // Write hello to the page
})

// Start the server on port 8080 in hardened mode, Default: 80,false
cthulhu.server.start(8080,false)
