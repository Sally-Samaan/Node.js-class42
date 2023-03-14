const express = require('express')
const app = express();
const fs = require("fs");

app.use(express.json());

// YOUR CODE GOES IN HERE
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.post ('/blogs', (req, res) => {
  // const title = req.body.title;
  // const content = req.body.content;
  const {title, content } = req.body; //this replace the 2 above lines

  fs.writeFileSync(title, content);

  res.status(201); // status HTTP 
  res.end(`your blog ${title} added successfully`);
});

app.put('/blogs/:title', (req, res) => {
const title = req.params.title;
const content = req.params.title;

  if (fs.existsSync(title)) {
    fs.writeFileSync(title, content);
    res.status(200);
    res.end('ok')
  }
  else{
    res.status(404);
    res.end("this post doesn't exist!")
  }
})

app.listen(3000)