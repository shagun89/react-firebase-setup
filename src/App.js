import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';

import NotificationsIcon from '@material-ui/icons/Notifications';

import { Menu} from 'antd';
import './App.css';
import { messaging } from "./init-fcm";

const menu = (
  <Menu>
    <Menu.Item key="0">
      1st menu item
    </Menu.Item>
    <Menu.Item key="1">
    2nd menu item
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

class App extends Component{
  
  constructor(props){
    super(props);
    this.state={
      notifications : []
    }
   }
  
  async componentDidMount() {
    var event = new Event('build');
    messaging.requestPermission()
      .then(async function() {
    const token = await messaging.getToken();
    console.log("Your token is: ", token);
      })
      .catch(function(err) {
        console.log("Unable to get permission to notify.", err);
      });
    // messaging.onMessage((payload) => console.log('Message received. ', payload));
    
    navigator.serviceWorker.addEventListener("message", event => {    
      
      if(event.data.message)
        this.collectNotifications(event);
    });
  }
  
  collectNotifications = (value) => {
    console.log("test", value)
    const newelement = {"msg" : value && value.data.message}
    this.setState(prevState => ({
      notifications: [...prevState.notifications, newelement]
    }))
  }
  render(){
    return(
      <div>
        {console.log(this.state.notifications)}
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" noWrap>
            Notifications Bar
          </Typography>
          <div className="btn-group show-on-hover" style={{marginLeft:'1100px'}}>
          
          <IconButton color="inherit" >
                <Badge badgeContent={this.state.notifications.length} color="secondary">
                  <NotificationsIcon />
                </Badge>
          </IconButton>
          <ul className="dropdown-menu" role="menu">
          {
            this.state.notifications.map(val => {
              return <li>{val.msg}</li>
            })
          }
            
          </ul>
        </div>

        </Toolbar>
      </AppBar>
      
    </div>
    );
  }
}

export default App;







