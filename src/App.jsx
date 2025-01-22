import './App.css'
import Accordion from './components/Accordion/Accordion'
import TaskManager from './components/asyncAwaitUsagesAPI/contactManagerApp'
import CounterComponent from './components/counterComp/counterComponent'
import FormValidations from './components/formValidator/formValidations'
import Todo from './components/todo/todo'
import TodoApp from './components/todoBasic/todoApp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accordion />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/todo-app" element={<TodoApp />} />
        <Route path="/form-validations" element={<FormValidations />} />
        <Route path="/task-manager" element={<TaskManager />} />
        <Route path="/counter" element={<CounterComponent />} />
      </Routes>
    </Router>
  );
}

export default App
