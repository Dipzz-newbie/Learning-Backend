const http = require("http");
const hostname =
  process.env.NODE_ENV !== "production" ? "localhost" : "dipzz.com";
const port = 3000;
const initialMemoryUsage = process.memoryUsage()
const yourName = "dipzz";
const environment = "development";
for(let i = 0; i <= 10000; i++) {
// Proses looping ini akan membuat penggunaan memori naik
}
const currentMemoryUsage = process.memoryUsage()
const memoryInformation = process.memoryUsage();
const requestHandler = (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.setHeader('Powered-By', 'Node.js');


  const {method, url}= req;;
  if (url === "/about") {
    if (method === "GET") {
      res.statusCode = 200;
      res.end(JSON.stringify({massage: "hai ini tampilan about", name: `${yourName}`, environment: `${environment}`, memoryUsage: `${JSON.stringify(memoryInformation.heapUsed)}`}));
    }else if(method === 'POST') {
      let body = [];

      req.on('data', (chunk) => {
          body.push(chunk);
      });

      req.on('end', () => {
          body = Buffer.concat(body).toString();
          const { name } = JSON.parse(body);
          res.statusCode = 200;
          res.end(JSON.stringify({
              message: `Halo, ${name}! Ini adalah halaman about`,
          }));
      });
  }else{
      res.statusCode = 404;
      res.end(JSON.stringify({message: `Halaman tidak dapat diakses menggunakan method ${method}`}));
    }
  } else if (url === "/home") {
    if (method === "GET") {
      res.statusCode = 200;
      res.end(JSON.stringify({massage: "hai ini tampilan about", name: `${yourName}`, environment: `${environment}`, memoryUsage: `${JSON.stringify(memoryInformation.heapUsed)}`}));
    } else{
      res.statusCode = 404;
      res.end(JSON.stringify({message: `Halaman tidak dapat diakses menggunakan method ${method}`}));
    }
  }else if (url === "/contact") {
    if (method === "GET") {
      res.statusCode = 200;
      res.end(JSON.stringify({massage: "hai ini tampilan about", name: `${yourName}`, environment: `${environment}`, memoryUsage: `${JSON.stringify(memoryInformation.heapUsed)}`}));
    }else{
      res.statusCode = 404;
      res.end(JSON.stringify({message: `Halaman tidak dapat diakses menggunakan method ${method}`}));
    }
  }else {
    res.statusCode = 404;
      res.end(`<h1>Halaman yang anda akses tidak di temukan!</h1>`);
  }

};

const server = http.createServer(requestHandler);
server.listen(port, hostname, () => {
  console.log(`Server berjalan pada http://${hostname}:${port}/`);
});


const fs = require("fs");

const readbleStream = fs.createReadStream("./article.txt", {highWaterMark : 10});
readbleStream.on("readable", () => {
  try{
    process.stdout.write(`[${readbleStream.read()}]`)
  } catch (error) {
    console.log("Error", error.message)
  }
});

readbleStream.on("end", () => {
  console.log("Selesai membaca file")
});




  
  
