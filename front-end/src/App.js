import logo from './logo.svg';
import './App.css';
import Tittle from './components/Title/Tittle';

function App() {
  return (
    <div
      style={{
        width: 600,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '85vh',
      }}
    >
      <Tittle />
      {/* <Filters />
      <Divider />
      <TodoList /> */}
    </div>
  );
}

export default App;
