import "./styles.css";
import React from 'react';
import Header from './header.js';
import Sidebar from './Sidebar.js';
import DataScienceContent from './DataScienceContent.js';
import SoftwareContent from './SoftwareEnggContent.js';
import FinanceContent from './FinanceContent.js';
import EntrepreneurContent from './entrepreneurContent.js';



class Main extends React.Component{
  render(){
    return(
      <React.Fragment>
      <Header/>
      <MainContent/>
      <Sidebar/>
      
      </React.Fragment>
    )
  }
}
class MainContent extends React.Component{
  render(){
    return(<div class="mainBody">
      <br/>
      <DataScienceContent/>
      <br/><br/>
      <SoftwareContent/>
      <br/><br/>
      <FinanceContent/>
      <br/><br/>
      <EntrepreneurContent/>
      <br/><br/>
      </div>
    )
  }
}

export default Main;
