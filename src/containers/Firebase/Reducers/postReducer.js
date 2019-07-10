import { Constants } from '../constants';

const initialState = {
    test:5,
    notifications: [],
    fcmToken: null,
    isLogin: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case Constants.TEST_VALUE:
                return{...state,
                    test: action.flag
                }
        case Constants.NOTIFICATIONS:
                return{...state,
                    notifications: action.notifications,
                    fcmToken: action.fcmToken
                }
        case Constants.USER:
                return{...state,
                    isLogin: action.isLogin,
                }
        default:
            return state;
    }
}   