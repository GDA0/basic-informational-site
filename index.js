// index.js
const http = require('http')
const fs = require('fs')
const path = require('path')

const port = 8080

const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    req.url === '/' ? 'index.html' : req.url + '.html'
  )

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        fs.readFile(
          path.join(__dirname, '404.html'),
          (error404, content404) => {
            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.end(content404, 'utf-8')
          }
        )
      } else {
        res.writeHead(500)
        res.end(`Server Error: ${error.code}`)
      }
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(content, 'utf-8')
    }
  })
})

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
