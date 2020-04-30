import formVisibleReducer from './form-visible-reducer';
import ticketListReducer from './ticket-list-reducer';
import editClickReducer from './edit-click-reducer';
import selectTicketReducer from './select-ticket-reducer';
import { combineReducers } from 'redux';
import * as c from './../actions/ActionTypes';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterTicketList: ticketListReducer,
  editing: editClickReducer,
  selectedTicket: selectTicketReducer
});

export default rootReducer;