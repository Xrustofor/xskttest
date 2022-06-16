const express = require('express');
const path = require('path');
const keys = require('./keys');

const PORT = process.env.PORT || 3000;

const app = express();


async function start() {
    try {
    //   await mongoose.connect(keys.MONGODB_URI, {
    //     useNewUrlParser: true,
    //     useFindAndModify: false
    //   })
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
      })
    } catch (e) {
      console.log(e)
    }
  }

start();

// // const fs = require('fs');
// // const http = require('http');
// const WebSocket = require('ws');
// const { v4: uuidv4 } = require('uuid');


// // const index = fs.readFileSync('./index.html', 'utf8');

// // const server = http.createServer((req, res) => {
// //   res.writeHead(200);
// //   res.end(index);
// // });

// // server.listen(8000, () => {
// //   console.log('Listen port 8000');
// // });

// // const ws = new WebSocket.Server({ server });

// // ws.on('connection', (connection, req) => {
// //     console.log(req);
// //   const ip = req.socket.remoteAddress;
// //   console.log(`Connected ${ip}`);
// //   connection.on('message', (message) => {
// //     console.log('Received: ' + message);
// //     for (const client of ws.clients) {
// //       if (client.readyState !== WebSocket.OPEN) continue;
// //       if (client === connection) continue;
// //       client.send(message, { binary: true, id: 1 });
// //     }
// //   });
// //   connection.on('close', () => {
// //     console.log(`Disconnected ${ip}`);
// //   });
// // });

// const server = new WebSocket.Server({port: 3000});

// let users = []

// function IsJsonString(str) {
//     try {
//         JSON.parse(str);
//     } catch (e) {
//         return false;
//     }
//     return true;
// }

// server.on('connection', ws => {
//     ws.on('message', data => {
//         server.clients.forEach(client => {
//             const json = data.toString()
//             if(IsJsonString(json)){
//                 const obj = JSON.parse(json);
//                 if(obj.isNew){
//                     // if(users.length){
//                     //     const newUserId = obj.id;
//                     //     const candidate = users.find(user => (user.id == newUserId || user.name == obj.name));
//                     //     console.log(candidate);
//                     //     if(!candidate){
//                     //         users.push(obj)
//                     //     }else{
//                     //         users = users.map(user => {
//                     //             if(user.name == obj.name){
//                     //                 return obj;
//                     //             }
//                     //         })
//                     //     }
//                     // }else{
//                     //     users.push(obj)
//                     // }
//                 }

//                 console.log(users);

//                 // const item = {
//                 //     item: obj,
//                 //     users
//                 // }
//                 // client.send(JSON.stringify(item));
//             }
            
//         })
//     })
//     // server.clients.forEach(client => {
//     //     if(client.readyState === WebSocket.OPEN){
//     //         client.send({ message, test: 1});
//     //     }
//     //     console.log(client.readyState);
//     // });

//     const newUser = {
//         name: `User-${users.length}`,
//         token: uuidv4()
//     }

//     if(users.length === 0){
//         users.push(newUser);
//     }else if(users.find(user => user.name === newUser.name)){
//         users = users.map(user => {
//             return user.name === newUser.name ? {...user, token: uuidv4() }  : user
//         })
//     }else{
//         users.push(newUser);
//     }


//     ws.send(JSON.stringify(users));
// })
