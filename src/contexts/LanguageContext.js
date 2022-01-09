import React, {createContext, Component} from "react";

const LanguageContext = createContext()

// you need to pass thing u want to change as a value to provider it could be number, string or state object itself
class LanguageProvider extends Component{
    state={
        language:'english'
    }
    changLanguage = (lang)=>{
        this.setState({
            language: lang
        })
    }
    render() {
        return (
            <LanguageContext.Provider value={{...this.state, changeLanguage:this.changLanguage}}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}

// Higher Order Component (a component which operates on other components)
// make function which takes Component as an argument and returns that same Component wrapped with Context.consumer so that context data can be accessed
const withLanguageContext = Component => props => (
    <LanguageContext.Consumer>
        {value => <Component languageContext={value} {...props} />}
    </LanguageContext.Consumer>
)

export {LanguageContext, LanguageProvider, withLanguageContext}