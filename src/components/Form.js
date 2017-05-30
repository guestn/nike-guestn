import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { formSubmit } from '../actions/actions';


export class Form extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			firstName: '',
			lastName: '',
			hobbies: '',
			hobbiesArr: [],
			formErrors: false
		}
	}
	
	onChangeFirstName = (event) => {
		this.setState({ firstName: event.target.value })
	}
	
	onChangeLastName = (event) => {
		this.setState({ lastName: event.target.value })
	}
	
	onChangeHobbies = (event) => {
		const str = event.target.value;
		const hobbies = str.trim().split(',')
		if (hobbies[hobbies.length-1] == '') hobbies.splice(-1,1)
		this.setState({ hobbies: str, hobbiesArr: hobbies })
	}
	
	onSubmit = (event) => {
		event.preventDefault();
		const { firstName, lastName, hobbiesArr } = this.state;
		const formValues = {
			firstName,
			lastName,
			hobbiesArr
		}
		const formIsValid = validate(formValues)
		if (formIsValid) {
			this.setState({ formErrors: false })
			this.props.onSubmit(formValues)
		} else {
			this.setState({ formErrors: true })
		}
	}

  render() {
		let {firstName, lastName} = this.props.result;

    return (
	    <div className="inner-container">
	    
	      <form>
	      	<span>* is required</span>
	      	<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
	      		<label className="mdl-textfield__label">First Name *</label>
	      		<input
	      			className="mdl-textfield__input"
	      			type={"text"}
	      			value={this.state.firstName}
	      			onChange={this.onChangeFirstName}
	      		/>
	      	</div>
	      	<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
	      		<label className="mdl-textfield__label">Last Name *</label>
						<input 
							className="mdl-textfield__input"
							type={"text"}
							value={this.state.lastName}
	      			onChange={this.onChangeLastName}
						/>			
	      	</div>
	      	<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
	      		<label className="mdl-textfield__label">Hobbies (comma-separated list) *</label>
						<input
							className="mdl-textfield__input"
							type = {"text"}
							value = {this.state.hobbies}
	      			onChange = {this.onChangeHobbies}
						/>			
	      	</div>
	      	<button 
	      		className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
      			type={"submit"}
						onClick={this.onSubmit}
						disabled={this.props.isLoading}
					>
					  Submit
					</button>
					{this.state.formErrors ?
						<div className="form-errors">Please Check Inputs!</div>
						: null
					}
	      </form>
      	
	      <div className="results">
	      	{(this.props.isLoading) ?
		      	<div className="spinner"></div> :
		      	(firstName) ?
		      		<div>Done! <br/>Submitted name is: <strong>{firstName} {lastName}</strong></div> :
		      		null
		      }
	      </div>
	      
      </div>
    );
    
  }
};

/* some rudimentary validation just to check that no input is empty,
   need something a lot better in prod.... */
const validate = values => {
	let arr = Object.keys(values).map(key => values[key]);
	return arr.every(val => val != '')
}

const mapStateToProps = state => {
 	return {...state}
}

const mapDispatchToProps = (dispatch, state) => ({
  onSubmit: formValues => {
		dispatch(formSubmit(formValues))
  },
});

const ConnectedForm = connect(mapStateToProps, mapDispatchToProps)(Form);
export default ConnectedForm
