



// function sayHello(event){
//   console.log('key pressed'+String.fromCharCode(event.which)); 
// }
// document.body.addEventListener('key pressed', sayHello);




// const Joi = require('joi');
// const express = require('express');
// const app = express();
// app.use(express.json());


// const courses = [
//   { id: 1, name: 'course uno' },
//   { id: 2, name: 'course doze' },
//   { id: 3, name: 'course tres' },
// ]


// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// app.get('/api/courses',(req, res)=>{
// res.send(courses);
// });

// app.post('/api/courses', (req, res) =>{
//   const { error } = validateCourse(req.body); //result.error
//   if (error) {
//     res.status(400).send(result.error.details[0].message);
//     return;
//  }
//   // const schema = Joi.object({ name: Joi.string() .min(3) .required(),
//   // });
//   // const result = schema.validate(req.body);
//   // res.send(result);
//   // if (result.error) {
//   //    res.status(400).send(result.error.details[0].message);
//   //    return;
//   // }

//   const course = {
//     id: courses.length +1,
//     name: req.body.name
//   };
//   courses.push(course);
//   res.send(course);
// });

// app.put('/api/courses/:id', (req, res) => {
//   ///look uo the course
//   //if don't exist, 404
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if(!course) res.status(404).send('The course with this id was not found');
  
//   //validate
//   // if invalid 400 (bad request)
//   const { error } = validateCourse(req.body); //result.error
//   if (error) {
//     res.status(400).send(result.error.details[0].message);
//     return;
//  }
//   // update course
//   course.name = req.body.name;
//   //return updated to client
//  res.send(course);
// }); 

// function validateCourse(course) {
//   const schema = {
//     name: Joi.string().min(3).required()
//   };
//   return Joi.validate(course, schema);
// }



// app.get('/api/courses/:id', (req, res)=>{
//  const course = courses.find(c => c.id === parseInt(req.params.id));
//  if(!course) res.status(404).send('The course with this id was not found');
//  res.send(course);
// });
// const port = process.env.PORT || 3000;
// app.listen(port, ()=>{
//   console.log(`Listening on port ${port}..`);
// })























// // const http = require('http');

// // const server = http.createServer((req, res) => {
// //   if (req.url === '/') {
// //     res.write('Hello World');
// //     res.end();
// //   }
// //   if (req.url === '/api/courses') {
// //     res.write(JSON.stringify([1, 2, 3]));
// //     res.end();
// //   }
// // });

// // server.listen(3000);

// // console.log('listening on port 3000...')