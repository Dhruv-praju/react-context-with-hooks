import {Component} from 'react'
import './App.css';
import Button from '@mui/material/Button'
import Navbar from './Navbar';
import Form from './Form';
import PageContent from './PageContent';

class App extends Component{
  render() {
    return (
      <div>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </div>
    )
  }
}

export default App;
