import './App.css';
import Login from './components/Login';
import Success from './components/Success';


//implement routes for the login and success component using react router 
// design an aesthetic and fuunctional login page component

function App() {
  return (
    <div className="App">
    
      <header className="App-header"> 
      <p> Auth0 with React</p>

        <Login/>
        <Success />
        

      </header>
    </div>
  );
}

export default App;
