const http = require("http");
const Lodash = require("lodash")
const tigerArg = require("./lib/tiger");
const wolfArg = require("./lib/wolf");
const moment = require("moment")
const hostname = process.env.NODE_ENV !== "production" ? "localhost" : "dipzz.com";
const port = 3000;
const initialMemoryUsage = process.memoryUsage();
const yourName = "dipzz";
const environment = "development";
const firstname = process.argv[2];
const lastname = process.argv[3];
const fullname = `${firstname} ${lastname}`;

const {EventEmitter} = require("events")
const myEventsEmitter = new EventEmitter()
const birthdayEventListener = ({name}) => {
  console.log(`Happy birthday ${name}!`);
}
myEventsEmitter.on("birthday", birthdayEventListener);
myEventsEmitter.emit("birthday", {name : "Dipzz"});

const Tiger = tigerArg;
const Wolf = wolfArg;
const fighting = (tiger, wolf) => {
  if(tiger.strength > wolf.strength) {
    tiger.growl();
    return;
  }
 
  if(wolf.strength > tiger.strength) {
    wolf.howl();
    return;
  }
 
  console.log('Tiger and Wolf have same strength');
}
const tiger = new Tiger();
const wolf = new Wolf();
fighting(tiger, wolf)

const date = moment().format("MMM Do YY")

const _ = Lodash 
const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);
console.log(myOddEvenArray);

for(let i = 0; i <= 10000; i++) {
// Proses looping ini akan membuat penggunaan memori naik
}
const currentMemoryUsage = process.memoryUsage();
const memoryInformation = process.memoryUsage();
const requestHandler = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(`Hello, World! \n ${JSON.stringify(memoryInformation)} \n Hai, ${yourName} \n Mode environment: ${environment} \n Penggunaan memori dari ${JSON.stringify(initialMemoryUsage.heapUsed)} naik ke ${JSON.stringify(currentMemoryUsage.heapUsed)} \n halo ${firstname ? fullname : "user"} \n ${date}`);
};
const server = http.createServer(requestHandler);
server.listen(port, hostname, () => {
  console.log(`Server berjalan pada http://${hostname}:${port}/`);
});

const coffee = require("./lib/coffee")
console.log(coffee)

const fs = require('fs');
const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};
 
fs.readFile('todo.txt', 'UTF-8', fileReadCallback);
// path.resolve(__dirname, 'notes.txt');