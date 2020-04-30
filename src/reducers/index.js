import formVisibleReducer from './form-visible-reducer';
import ticketListReducer from './ticket-list-reducer';
import editClickReducer from './edit-click-reducer';
import { combineReducers } from 'redux';
import * as c from './../actions/ActionTypes';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterTicketList: ticketListReducer,
  editing: editClickReducer
});

export default rootReducer;