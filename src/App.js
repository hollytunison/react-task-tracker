import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Dr Appt',
      day: 'May 5th',
      reminder: true
    },
    {
      id: 2,
      text: 'Car Appt',
      day: 'May 5th',
      reminder: true
    },
    {
      id: 3,
      text: 'Hair Appt',
      day: 'May 5th',
      reminder: true
    },
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==id))
  }

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <div className='container'>
      <Header />
      <AddTask />
      {tasks.length > 0 ? (
      <Tasks 
      tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}
      /> 
      ) : (
      'No tasks to show'
      )}
    </div>
  )
}

// FOR CLASS COMPONENTS
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
