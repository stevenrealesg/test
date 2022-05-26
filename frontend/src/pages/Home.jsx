import { Link, Outlet } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Test - Steven Reales</h1>
            <nav>
                <ul>
                    <li><Link to="/">1. Watcher</Link></li>
                    <li><Link to="crud">2. API - CRUD</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default Home;