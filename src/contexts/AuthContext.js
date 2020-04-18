import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        isAuthenticated: true
    }

    toggleAuth = () => {
        // console.log("I am here");
        this.setState({
            isAuthenticated: !this.state.isAuthenticated
        });
    }

    render() { 
        return (
            <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
                { this.props.children }
            </AuthContext.Provider>
        );
    }
}
 
export default AuthContextProvider;
