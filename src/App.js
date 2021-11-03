import './App.css';
import Sidebar from './components/Sidebar';
import Students from './components/Students';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div className=''>
            <Sidebar />
            <Router>
                <Switch>
                    <Route>
                        <Students path='/' />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
