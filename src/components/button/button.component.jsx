import {
  BaseButton,
  InvertedButton,
  GoogleSignInButton,
  ButtonSpinner,
} from "./button.styles.jsx";

export const BUTTON_TYPE = {
  base: "base",
  google: "google",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE.base) =>
  ({
    [BUTTON_TYPE.base]: BaseButton,
    [BUTTON_TYPE.inverted]: InvertedButton,
    [BUTTON_TYPE.google]: GoogleSignInButton,
  }[buttonType]);

const Button = ({ children, buttonType, isLoading, ...attributes }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton disabled={isLoading} {...attributes}>{ isLoading ? <ButtonSpinner /> : children}</CustomButton>;
};

export default Button;
