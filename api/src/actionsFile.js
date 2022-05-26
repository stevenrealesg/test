const fs = require('fs');

const getDataFile = (nameFile) => {
    try {
        const data = fs.readFileSync(nameFile, 'utf8');
        const arrData = data.split('\r\n').map(line => line.split(','))
        return{
            headers: arrData.shift(),
            data: arrData
        }
    } catch (error) {
        console.log(error);
        return null
    }
}

module.exports = { getDataFile };