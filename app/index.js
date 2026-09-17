const http = require('http');
const PORT = 3000;
const server = http.createServer((req, res) => {
  res.end('PetStore App is running!');
});
server.listen(PORT, () => console.log(`App listening on port ${PORT}`));
