import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Todo from './component/todo/Todo';
import Todos from "./component/todo/Todos";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Todos/>}/>
          <Route exact path="/todo/:id" element={<Todo/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
