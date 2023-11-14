
import './App.css';
import LoginButton from './components/LoginButton';
import Profile from './components/Profile';
import LogoutButton from './components/LogoutButton';
function App() {


  return (
    <div className="App">
      <h1>application</h1>
      <Profile/>
   <LoginButton/> <LogoutButton/>
   
    </div>
  );
}

export default App;


