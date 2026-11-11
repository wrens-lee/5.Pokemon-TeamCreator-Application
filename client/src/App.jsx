import { Outlet } from 'react-router';
import './App.css'
import NavBar from './Components/NavBar'

function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <NavBar />
      <main className='flex-1 flex flex-col'>
        <Outlet/>
      </main>
    </div>
  );
}

export default App
