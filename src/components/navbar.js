import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

// class Navbar extends Component {
//     render() { 
//         return (
//             <AuthContext.Consumer>{(authContext) => (
//                 <ThemeContext.Consumer>{(themeContext) => {
//                     const { isAuthenticated, toggleAuth } = authContext;
//                     const { isLightTheme, light, dark } = themeContext;
//                     const theme = isLightTheme ? light : dark;
//                     return (
//                         <nav style={{ background: theme.ui, color: theme.syntax }}>
//                             <h1>Context App</h1>
//                             {/* Point to remember what is done here in onClick event */}
//                             <div onClick={() => toggleAuth()}>
//                                 { isAuthenticated ? 'Logged in' : 'Logged out' }
//                             </div>
//                             <ul>
//                                 <li>Home</li>
//                                 <li>About</li>
//                                 <li>Contact</li>
//                             </ul>
//                         </nav>
//                     )
//                 }}</ThemeContext.Consumer>
//             )}</AuthContext.Consumer>
//         );
//     }
// }

// Here we employed useState hook to consume multiple contexts

const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    return (
        <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>Context App</h1>
            {/* Point to remember what is done here in onClick event */}
            <div onClick={() => toggleAuth()}>
                { isAuthenticated ? 'Logged in' : 'Logged out' }
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}
 
export default Navbar;