const express = require('express')
const path = require('path')

const app = express()
const port = 8080

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

// Route for the about page
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'))
})

// Route for the contact me page
app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact-me.html'))
})

// Catch-all route for 404 errors
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'))
})

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
