import * as c from './../actions/ActionTypes';


export default (state = null, action) => {
  const { id } = action;
  switch (action.type) {
  case c.SELECT_TICKET:  
    const newState = { ...state };
    return newState[id];

  case c.DESELECT_TICKET:
    return null;
  default:
    return state;
 }
};


