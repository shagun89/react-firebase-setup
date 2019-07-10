import { Constants } from './constants';
import { messaging } from "./init-fcm";
import ls from 'local-storage';
import {doHttpPost} from '../../components/utilities';

export function Test(flag){
    return (dispatch) => {
        dispatch({
            type : Constants.TEST_VALUE,
            flag
        });
    }
}

export function getNotifications(event, prevNotifications){
    
    console.log("val in actions: ", prevNotifications);
    let newelement = {"msg" : event && event.data.data}
    console.log("new element : ", newelement);
    let arr = prevNotifications;
    arr.push(newelement);
    return (dispatch) => {
        dispatch({
            type : Constants.NOTIFICATIONS,
            notifications : arr
        });
    }
}

export function getFcmToken(token){
    return (dispatch) => {
        dispatch({
            type : Constants.NOTIFICATIONS,
            fcmToken : token
        });
    }
}

export function LoginLogout (value, token){
    var url = 'http://192.168.36.64:8000/accounts/subscribe';
    let options = {
        'access_token': "f388f37ba61d365b33d83e48e9d1bdbaefe393a8b5eabfc7d874782c11a0b1df",
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"
    }
    return (dispatch) => {
        if(!value)
        {
            messaging.deleteToken(ls.get('fcm_token'))
            .then(function () {
                console.log("token successfully removed")
                ls.remove('fcm_token');
            })
            .catch(function(err) {
                console.log("Some error occurred while removing token", err)
            })
        }
        else
        {
            
            messaging.requestPermission()
            .then(async function() {
            token = await messaging.getToken();
            console.log("Your token is: ", token);
            ls.set("fcm_token",token);
            let objToSend = {"fcmToken" : token}
            var promise = doHttpPost(url, objToSend, options);
            promise.then(function (response) { 
                console.log("Successfully sent ", response)})
            .catch(function (err) {
                console.log("some error occured")
            })
            })
            .catch(function(err) {
                console.log("Unable to get permission to notify.", err);
            });

        }
        dispatch({
            type : Constants.USER,
            isLogin : value
        });
    }
}

