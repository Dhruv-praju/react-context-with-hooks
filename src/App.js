import {Component} from 'react'
import './App.css';
import Button from '@mui/material/Button'
import Navbar from './Navbar';

class App extends Component{
  render() {
    return (
      <div className='App'>
        <Navbar />
      </div>
    )
  }
}

export default App;
