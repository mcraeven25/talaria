import { useState } from "react";
import { useDispatch } from "react-redux";

import Button, { BUTTON_TYPE } from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import { SignInContainer, ButtonsContainer } from "./sign-in.styles";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase-utils.js";

import { googleSignInStart, emailSignInStart } from "../../store/user/user.action"; 

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {

  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
     dispatch(emailSignInStart(
        email,
        password
      ));
      resetForm();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-pasword":
          alert("Incorrect Password or Email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const signInWithGoogle = async () => {
    try {
      dispatch(googleSignInStart());
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already Have an Account?</h2>
      <span>Sign In with your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE.google}
            onClick={signInWithGoogle}
            type="button"
          >
            Google 
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
