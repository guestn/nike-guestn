import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { Form } from './Form'; // need brackets to get dumb component


describe('<Form/>', () => {
	
	const testProps = {
		firstName:'Nicholas',
		lastName:'Guest',
		hobbies:['paragliding','eating']
	}
	const	container = shallow(<Form result={testProps}/>);

	it('renders the form component', () => {
		expect(container).toHaveLength(1);
	}),
	
	it('renders three input fields', () => {
		expect(container.find('input').length).toBe(3);
	})
	
	it('submit button should invoke onSubmit method when clicked', () => {
		let instance = container.instance();
		const onSubmitClick = sinon.spy(instance, 'onSubmit')
		
		/* need to do it this way for arrow function component methods
		   see: https://github.com/airbnb/enzyme/issues/586 */
		instance.forceUpdate()
		container.update()

		container.find('button').simulate('click',{ preventDefault() {} });
		expect(onSubmitClick).toHaveProperty('callCount', 1);
	})
	
})