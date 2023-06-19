import './App.css';
import Login from './Login';
import Profile from './Profile';
import { store } from './store'
import { Provider } from 'react-redux';
function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <Profile />
        <Login />
       
      </Provider>  </div>
  );
}

export default App;
