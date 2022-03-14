import "./styles.css";
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt,faHome,faUsers,faGlobe,faFileVideo } from '@fortawesome/free-solid-svg-icons';

class SideBar extends React.Component{
  constructor(){
    super();
    this.state={class:"sidebar showSidebar bg-dark"}
    this.visi={visibility:"hidden"}
  }
  handleToggle=()=>{
    if(this.state.class==="sidebar showSidebar bg-dark"){
      this.setState({class:"sidebar hideSidebar"});
      this.visi={visibility:"visible"}
    }
    else{
      this.setState({class:"sidebar showSidebar bg-dark"});
      this.visi={visibility:"hidden"}
    }
  }
  render(){
    return(<div class="bg-dark">
      <button style={this.visi} type="button" id="show" class="btn" onClick={this.handleToggle}>
       <FontAwesomeIcon icon={faSignOutAlt} color="white" size="sm"/>
       </button>
       <div className={this.state.class} id="sidebar">
        <ul type="none">
        <li>
        <a href="#" className="active">
         <span>
        <FontAwesomeIcon icon={faHome} color="white" size="sm"/>
        </span>&nbsp;&nbsp;Home
        </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <button type="button" class="btn" onClick={this.handleToggle}>
       <FontAwesomeIcon icon={faSignOutAlt} color="white" size="sm" flip="horizontal"/>
       </button></li>

        <li>
        <a href="#" className="text-muted">
         <span>
        <FontAwesomeIcon icon={faGlobe} color="grey" size="sm"/>
        </span>&nbsp;&nbsp;&nbsp;Cultures</a></li>

        <li>
        <a href="#" className="text-muted">
         <span>
        <FontAwesomeIcon icon={faUsers} color="grey" size="sm"/>
        </span>&nbsp;&nbsp;Rooms</a></li>

        <li>
        <a href="#" className="text-muted">
        <span>
        <FontAwesomeIcon icon={faFileVideo} color="grey" size="sm"/>
        </span>&nbsp;&nbsp;&nbsp;&nbsp;Playlist</a></li>
        </ul> 

        <ul class="rooms" type="none">
        <p>Recommended Rooms</p>
        <li>
        <img class="img-fluid rounded-circle" src="https://media.istockphoto.com/photos/daffodil-picture-id106596517?s=612x612" alt="Finlight" width="15%"/>
        &nbsp;Finlight&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#"><span class="badge bg-primary">Join</span></a>
        </li>
        <li>
        <img class="img-fluid rounded-circle" src="https://media.istockphoto.com/photos/daffodil-picture-id106596517?s=612x612" alt="Finlight" width="15%"/>
        &nbsp;Finlight&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#"><span class="badge bg-primary">Join</span></a>
        </li>
        <li>
        <img class="img-fluid rounded-circle" src="https://media.istockphoto.com/photos/daffodil-picture-id106596517?s=612x612" alt="Finlight" width="15%"/>
        &nbsp;Finlight&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#"><span class="badge bg-primary">Join</span></a>
        </li>
        <li>
        <img class="img-fluid rounded-circle" src="https://media.istockphoto.com/photos/daffodil-picture-id106596517?s=612x612" alt="Finlight" width="15%"/>
        &nbsp;Finlight&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#"><span class="badge bg-primary">Join</span></a>
        </li>
        <li>
        <img class="img-fluid rounded-circle" src="https://media.istockphoto.com/photos/daffodil-picture-id106596517?s=612x612" alt="Finlight" width="15%"/>
        &nbsp;Finlight&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#"><span class="badge bg-primary">Join</span></a>
        </li>
        <li>
        <img class="img-fluid rounded-circle" src="https://media.istockphoto.com/photos/daffodil-picture-id106596517?s=612x612" alt="Finlight" width="15%"/>
        &nbsp;Finlight&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#"><span class="badge bg-primary">Join</span></a>
        </li>
        <a href="#" class="text-light">see more</a>
        </ul>

        <ul class="rooms" type="none">
        <p>Recommended Creators</p>
        <li>
        <img class="img-fluid rounded-circle" src="https://media.istockphoto.com/photos/daffodil-picture-id106596517?s=612x612" alt="Finlight" width="15%"/>
        &nbsp;Finlight&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#"><span class="badge bg-primary">Room</span></a>
        </li>
        <li>
        <img class="img-fluid rounded-circle" src="https://media.istockphoto.com/photos/daffodil-picture-id106596517?s=612x612" alt="Finlight" width="15%"/>
        &nbsp;Finlight&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        </li>
        <li>
        <img class="img-fluid rounded-circle" src="https://media.istockphoto.com/photos/daffodil-picture-id106596517?s=612x612" alt="Finlight" width="15%"/>
        &nbsp;Finlight&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#"><span class="badge bg-primary">Room</span></a>
        </li>
        <li>
        <img class="img-fluid rounded-circle" src="https://media.istockphoto.com/photos/daffodil-picture-id106596517?s=612x612" alt="Finlight" width="15%"/>
        &nbsp;Finlight&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#"><span class="badge bg-primary">Room</span></a>
        </li>
        <li>
        <img class="img-fluid rounded-circle" src="https://media.istockphoto.com/photos/daffodil-picture-id106596517?s=612x612" alt="Finlight" width="15%"/>
        &nbsp;Finlight&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        </li><li>
        <img class="img-fluid rounded-circle" src="https://media.istockphoto.com/photos/daffodil-picture-id106596517?s=612x612" alt="Finlight" width="15%"/>
        &nbsp;Finlight&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#"><span class="badge bg-primary">Room</span></a>
        </li>
        <a href="#" class="text-light">see more</a>
        </ul>
      </div>
      </div>
    )
  }
}
export default SideBar;
