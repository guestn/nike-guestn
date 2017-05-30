export const FORM_SUBMIT = 'FORM_SUBMIT';
export const RESULT_FETCH_SUCCESS = 'RESULT_FETCH_SUCCESS';

export function formSubmit(formValues) {
	return dispatch => {

		dispatch(requestSave(formValues));

		// synthetic API call...

		setTimeout(() => {

			dispatch(resultSuccess())
		}, 2000)

	}
}

export function requestSave(formValues) {
	return {
		type: FORM_SUBMIT,
		formValues,
		isLoading: true
	}
}

export function resultSuccess() {
	return {
		type: RESULT_FETCH_SUCCESS,
		isLoading: false,
	}
}