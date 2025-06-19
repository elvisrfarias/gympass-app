import { app } from "./app";


app.listen({
  host: '0.0.0.0',
  port: 3335,
}).then(() => {
  console.log('HTTP server running!')
}).catch((err) => {
  console.error('Error starting server:', err);
})
