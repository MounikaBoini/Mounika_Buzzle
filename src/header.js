import "./styles.css";
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
  render(){
   return (
   <div class="header bg-dark">
   <input type="text" placeholder="Search" class="form-control"/>
   <span class="iconSearch">
   <FontAwesomeIcon icon={faSearch} color="white" size="sm"/>
   </span>
   <button id="login" class="btn btn-primary btn-sm">Login</button>
   &nbsp;&nbsp;
   <button id="signup" class="btn btn-primary btn-sm">SignUp</button>
   </div>
  );
  }
  
}
export default Header;

