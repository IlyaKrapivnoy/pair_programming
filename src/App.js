import './App.css';
import Sidebar from './components/Sidebar';
import Students from './components/Students';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddStudents from './components/AddStudents';
import { useState } from 'react';

function App() {
    const [isLogged, setIsLogged] = useState(false);

    return (
        <div className='flex'>
            <Router>
                <Sidebar />
                <Switch>
                    <Route exact path='/'>
                        <Students
                            isLogged={isLogged}
                            setIsLogged={setIsLogged}
                        />
                    </Route>
                    <Route path='/add_students'>
                        <AddStudents
                            isLogged={isLogged}
                            setIsLogged={setIsLogged}
                        />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
