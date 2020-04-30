import editClickReducer from '../../reducers/edit-click-reducer';
import * as c from '../../actions/ActionTypes';

describe('editClickReducer', () => {
  
  
  test('Should return default state if no action type is recognized', () => {
    expect(editClickReducer(false, { type: null })).toEqual(false);
  });
});

