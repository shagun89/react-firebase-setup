import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { messaging } from "./init-fcm";
import './styles.css';
import ls from 'local-storage'

import {
    Test,
    getNotifications,
    getFcmToken,
    LoginLogout
} from './actions.js';

let token;

class Firebase extends Component{

    componentDidMount() {   

      messaging.requestPermission()
            .then(async function() {
            token = await messaging.getToken();
            messaging.deleteToken(token);
            console.log("Previous token deleted");
            })
            .catch(function(err) {
                console.log("Unable to delete previous tokens .", err);
            });
        navigator.serviceWorker.addEventListener("message", event => { 
                      
                  if(event.data.data)
                    this.collectNotifications(event, this.props.notifications, token);
                });
    }

    collectNotifications = (event, prevNotifications, token) => {
        this.props.getFcmToken(token);
        this.props.getNotifications(event, prevNotifications);
    
    }

    render(){
      console.log("fcm props: ",this.props)
    return(
      (this.props.isLogin ? 
      <div>
         <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" noWrap>
             Notifications Bar
          </Typography>
           <div className="btn-group show-on-hover" style={{marginLeft:'1100px'}}>
          
           <IconButton color="inherit" >
                 <Badge badgeContent={this.props.notifications && this.props.notifications.length} color="secondary">
                   <NotificationsIcon />
                 </Badge>
           </IconButton>
           
           <ul className="dropdown-menu" role="menu">
           {
            
            this.props.notifications && this.props.notifications.map(val => {
              return <li>{val.msg}</li>
            })
          }
            
          </ul>
        </div>
        <IconButton color="inherit" onClick={() => this.props.LoginLogout(false, this.props.fcmToken)}>
                   <AccountCircle />
        </IconButton>
        </Toolbar>
      </AppBar>
    </div> : 
    <div>
      <h1 style={{textAlign: "center"}}>LOGIN/LOGOUT</h1>
      <button onClick = {() => this.props.LoginLogout(true, this.props.fcmToken)} style={{width: '50%', height: '10%', marginLeft: '350px'}}>LOGIN</button>
    </div>
      )
    );
  }
}

const mapStateToProps = state => ({
    test: state.postReducer.test,
    notifications: state.postReducer.notifications,
    fcmToken: state.postReducer.fcmToken,
    isLogin: state.postReducer.isLogin
})
export default connect(mapStateToProps, {
    Test,
    getNotifications,
    getFcmToken,
    LoginLogout
  })(Firebase);







