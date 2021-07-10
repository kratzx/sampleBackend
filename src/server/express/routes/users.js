import express from "express";

const usersRouter = express.Router();

usersRouter.all('/', (req, res) => {
  console.log('Redirecting to users/login')
  res.redirect('users/login');
});

usersRouter.all('/login', (req, res) => {
  console.log('Request on users/login')
  res.send('Login OK');
});

usersRouter.all('/register', (req, res) => {
  console.log('Request on users/register')
  res.send('Register OK');
});

export default usersRouter;