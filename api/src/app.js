const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');
const fs = require('fs');
const dotenv = require('dotenv');
const { getDataFile } = require('./actionsFile');
const routePerson = require('./routes/person.route');

dotenv.config();
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: 'POST'
    }
});

io.on('connection', (socket) => {
    console.log('a user connected id:', socket.id);

    const data = getDataFile('valores.txt')
    socket.emit('data', data);

    const watcher = fs.watch("valores.txt", (eventType, filename) => {
        if (eventType === 'change') {
            console.log(`File ${filename} has been changed`);
            const data = getDataFile('valores.txt')
            socket.emit('data', data);
        }
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
        watcher.close();
    });

});

app.use('/person', routePerson)

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});