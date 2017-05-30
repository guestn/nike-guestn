import React from 'react';
import { FORM_SUBMIT, RESULT_FETCH_SUCCESS } from '../actions/actions';
import reducer from './index'


describe('nikeApp reducer', () => {

	it('should return the inital state', () => {
		expect(
			reducer(undefined, {})
		).toEqual(
			{
				result: {},
				isLoading: false	
			}
		)
  })
  
  it('should handle form submission to store', () => {
		expect(
			reducer({}, {
				type: FORM_SUBMIT,
				formValues: {
					firstName:'Nicholas',
					lastName:'Guest',
					hobbies:['paragliding','eating']
				}
			})
		).toEqual(
			{
				result: {
					firstName:'Nicholas',
					lastName:'Guest',
					hobbies:['paragliding','eating']
				},
				isLoading: true	
			}
		)
  })
  
  it('should return isLoading correctly on action RESULT_FETCH_SUCCESS', () => {
	  expect(
		  reducer({}, {
			  type: RESULT_FETCH_SUCCESS,
			  isLoading: false
		  })
	  ).toEqual(
	  	{
		  	isLoading: false
		  }
	  )
	  
  })
    
})