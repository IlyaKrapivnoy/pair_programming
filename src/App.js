import './App.css';
import Sidebar from './components/Sidebar';
import Students from './components/Students';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddStudents from './components/AddStudents';

function App() {
    return (
        <div className=''>
            <Router>
                <Sidebar />
                <Switch>
                    <Route exact path='/'>
                        <Students />
                    </Route>
                    <Route path='/add_students'>
                        <AddStudents />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
