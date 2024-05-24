import './App.css';
import { Outlet } from 'react-router-dom';
import Child from './Child';

function App() {
  return (
  <>
  <Outlet />

  </>
  )
}

export default App;
