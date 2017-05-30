import React from 'react';
import * as actions from './actions';

describe('actions', () => {

	it('should create an action submit the form', () => {
    const formValues = {firstName: 'Nicholas', lastName: 'Guest', hobbies: ['paragliding', 'eating']};
    const expectedAction = {
      type: actions.FORM_SUBMIT,
      formValues
    }
    expect(actions.requestSave(formValues)).toEqual(expectedAction)
  }),

  it('should create an action to update loading state', () => {
    const expectedAction = {
	    type: actions.RESULT_FETCH_SUCCESS,
			isLoading: false,
    }
    expect(actions.resultSuccess()).toEqual(expectedAction)
  })
    
})