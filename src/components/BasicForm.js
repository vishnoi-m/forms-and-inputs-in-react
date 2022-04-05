import useInput from "../customHook/use-input";

const isNotEmpty = (value) => value.trim() !== "";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    hasError: firstNameInputHasError,
    isValid: enteredFirstNameIsValid,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(isNotEmpty);

  // const {
  //   value: enteredLastName,
  //   hasError: LastNameInputHasError,
  //   isValid: enteredLastNameIsValid,
  //   valueChangeHandler: LastNameChangedHandler,
  //   inputBlurHandler: LastNameBlurHandler,
  //   reset: resetLastNameInput,
  // } = useInput(isNotEmpty);

  // const {
  //   value: enteredEmail,
  //   hasError: emailInputHasError,
  //   isValid: enteredEmailIsValid,
  //   valueChangeHandler: emailChangedHandler,
  //   inputBlurHandler: emailBlurHandler,
  //   reset: resetEmailInput,
  // } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredFirstNameIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetFirstNameInput();
  };

  const firstNameClass = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameInputHasError && (
            <p className="error-text">Please Enter the First Name!!</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
