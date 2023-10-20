import './App.css';
import React from 'react';
// import CakeContainer from './components/CakeContainer';
// import HooksCakeContainer from './components/HooksCakeContainer'
// import NewCakeContainer from './components/NewCakeContainer';
import {Provider} from 'react-redux';
import store from './redux/store';

// import IceCreamContainer from './components/IceCreamContainer';
import UserContainer from './components/UserContainer'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
{/* <NewCakeContainer /> */}
        {/* <p>========Through Hooks=========</p> */}
        {/* <HooksCakeContainer /> */}


        {/* <IceCreamContainer /> */}
        <UserContainer />
      </div>
    </Provider>
    
  );
}

export default App;
