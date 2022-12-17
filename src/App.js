import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './component/auth/Auth';
import Dashboard from './component/dashboard/Dashboard';
import Todo from './component/todo/Todo';
import Todos from "./component/todo/Todos";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard/>}/>
          <Route exact path="/todo" element={<Todos/>}/>
          <Route exact path="/todo/:id" element={<Todo/>}/>
          <Route exact path="/login" element={<Auth/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
