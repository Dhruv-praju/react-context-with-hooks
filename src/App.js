import {Component} from 'react'
import './App.css';
import Button from '@mui/material/Button'
import Navbar from './Navbar';
import Form from './Form';
import PageContent from './PageContent';
import {ThemeProvider} from './contexts/ThemeContext';

class App extends Component{
  render() {
    return (
      <div>
        <ThemeProvider>
          <PageContent>
            <Navbar />
            <Form />
          </PageContent>
        </ThemeProvider>
      </div>
    )
  }
}

export default App;
