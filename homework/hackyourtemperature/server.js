import express from 'express'; // Import the Express module
// import { API_KEY } from "./sources/keys.js";
import app from './app.js';


const PORT = 3000;
app.listen(PORT, () => console.log(`Server is listening now port ${PORT}`));



