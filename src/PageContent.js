import React, { Component } from 'react'

import { ThemeContext } from './contexts/ThemeContext'

class PageContent extends Component {
    static contextType = ThemeContext
    render() {
        // console.log(this.context);
        const {isDarkMode, toggleTheme} = this.context
        const styles = {
            light:{
                backgroundColor: 'white',
                height:'100vh',
                width:'100vw'
            },
            dark:{
                backgroundColor: '#00042bd6',
                height:'100vh',
                width:'100vw'
            }
        }
        return (
            <div style={isDarkMode ? styles.dark : styles.light}>
                {this.props.children}
            </div>
        )
    }
}

export default PageContent