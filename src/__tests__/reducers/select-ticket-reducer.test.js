import selectTicketReducer from '../../reducers/select-ticket-reducer';
import * as c from '../../actions/ActionTypes';

describe('selectTicketReducer', () => {
  let action;

  const currentState = {
    1: {names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1 },
    2: {names: 'Jasmine and Justine',
    location: '2a',
    issue: 'Reducer has side effects.',
    id: 2 }
  }

  test('Should return default state if no action type is recognized', () => {
    expect(selectTicketReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully select a ticket', () => {
    action = {
      type: c.SELECT_TICKET,
      id: 2
    };
    expect(selectTicketReducer(currentState, action)).toEqual(
      {names: 'Jasmine and Justine',
        location: '2a',
        issue: 'Reducer has side effects.',
        id: 2 }
    );
  });
})