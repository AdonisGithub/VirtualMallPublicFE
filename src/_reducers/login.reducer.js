import { userConstants } from '../_constants';
const initialstate = {
     loginstate: false
}

export function accession(state =initialstate , action) {
    switch (action.type) {
          case userConstants.REGISTER_SUCCESS:
               return {
                    ...state,
                    loginstate: true,
               };
          case userConstants.REGISTER_FAILURE:
               return {
                    ...state,
                    loginstate:false
               };
          default:
               return state
    }
}