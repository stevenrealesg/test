import { useEffect, useState } from 'react';
import io from 'socket.io-client';

function Watcher() {

    const [data, setData] = useState(null);

    useEffect(() => {
        const newSocket = io(`http://localhost:3001`);
        newSocket.on('data', (data) => {
            setData(data);
        });
        return () => {
            newSocket.close();
        }
    }, []);

    return (
        <>
            <h1>Watcher/Socket</h1>
            <table>
                <thead>
                    <tr>
                        {data && data.headers.map((header, index) => <th key={index}>{header}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data && data.data.map((row, index) => <tr key={index}>{row.map((cell, index) => <td key={index}>{cell}</td>)}</tr>)}
                </tbody>
            </table>
        </>
    );
}

export default Watcher;