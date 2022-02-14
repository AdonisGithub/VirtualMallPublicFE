import { userConstants } from '../_constants';
const initialstate = {
     registerstate: false
}

export function registration(state =initialstate , action) {
    switch (action.type) {
          case userConstants.REGISTER_SUCCESS:
               return {
                    ...state,
                    registerstate: true,
               };
          case userConstants.REGISTER_FAILURE:
               return {
                    ...state,
                    registerstate: false,
               };
          default:
               return state
    }
}