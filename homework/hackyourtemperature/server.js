import express from 'express'; // Import the Express module

const app = express(); // Create a new Express instance

app.listen(3000, () => { // Listen to port 3000 and log a message when the server starts
  console.log('Server started on port 3000');
});


app.get("/", (req,res) => { // Listen to port 3000 and log a message when the server starts
  res.send("hello from backend to frontend!")
});

