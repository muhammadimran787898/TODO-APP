
import  "./App.css";
import  Header from './header';
import Input from './input'
import store from './store'

import History from './todohistory'
import {Provider} from 'react-redux';


export default function App() {
  return( 
  <Provider store={store}>
  <div className="app">
  <Header/>
  <Input/>
  <History/>
  </div>
  </Provider>)
}
