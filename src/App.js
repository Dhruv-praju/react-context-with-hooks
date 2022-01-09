import {Component} from 'react'
import './App.css';
import Button from '@mui/material/Button'
import Navbar from './Navbar';
import Form from './Form';
import PageContent from './PageContent';
import {ThemeProvider} from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

class App extends Component{
  render() {
    return (
      <div className='App'>
        <ThemeProvider>
          <LanguageProvider>
            <PageContent>
              <Navbar />
              <Form />
            </PageContent>
          </LanguageProvider>
        </ThemeProvider>
      </div>
    )
  }
}

export default App;
