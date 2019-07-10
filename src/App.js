import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Firebase  from './containers/Firebase';



class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/obelix_react">
        <div>
          <Switch>
            <Route exact path='/' component={Firebase} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import Badge from '@material-ui/core/Badge';

// import NotificationsIcon from '@material-ui/icons/Notifications';
// import ls from 'local-storage'
// import { Menu} from 'antd';
// import './App.css';
// import { messaging } from "./init-fcm";


// const menu = (
//   <Menu>
//     <Menu.Item key="0">
//       1st menu item
//     </Menu.Item>
//     <Menu.Item key="1">
//     2nd menu item
//     </Menu.Item>
//     <Menu.Divider />
//     <Menu.Item key="3">3rd menu item</Menu.Item>
//   </Menu>
// );

// class App extends Component{
  
//   constructor(props){
//     super(props);
//     this.state={
//       notifications : [],
//       fcm_token : ''
//     }
//    }
  
//   async componentDidMount() {
   
    
//     messaging.requestPermission()
//       .then(async function() {
//     const token = await messaging.getToken();
//     ls.set("fcm_token",token);
//     console.log("Your token is: ", token);
//       })
//       .catch(function(err) {
//         console.log("Unable to get permission to notify.", err);
//       });
      
    
//     navigator.serviceWorker.addEventListener("message", event => {        
//       if(event.data.message)
//         this.collectNotifications(event);
//     });
//   }
  
//   collectNotifications = (value) => {
    
//     const newelement = {"msg" : value && value.data.message}

//     this.setState(prevState => ({
//       notifications: [...prevState.notifications, newelement]
//     }))
  
//     ls.set(ls.get('fcm_token'),this.state.notifications);
//   }
//   render(){
//     return(
      
//       <div>
//         {console.log("token: ",ls.get('fcm_token'))}
//         {console.log("data: ", ls.get(ls.get('fcm_token')))}
//       <AppBar position="static">
//         <Toolbar>
          
//           <Typography variant="h6" noWrap>
//             Notifications Bar
//           </Typography>
//           <div className="btn-group show-on-hover" style={{marginLeft:'1100px'}}>
          
//           <IconButton color="inherit" >
//                 <Badge badgeContent={ls.get(ls.get('fcm_token')) && ls.get(ls.get('fcm_token')).length} color="secondary">
//                   <NotificationsIcon />
//                 </Badge>
//           </IconButton>
//           <ul className="dropdown-menu" role="menu">
//           {
            
//             ls.get(ls.get('fcm_token')) && ls.get(ls.get('fcm_token')).map(val => {
//               return <li>{val.msg}</li>
//             })
//           }
            
//           </ul>
//         </div>

//         </Toolbar>
//       </AppBar>
      
//     </div> 
//     );
//   }
// }

// export default App;







