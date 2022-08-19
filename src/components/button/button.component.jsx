import {
  BaseButton,
  InvertedButton,
  GoogleSignInButton,
  ButtonSpinner,
  HideButton,
} from "./button.styles.jsx";

export const BUTTON_TYPE = {
  base: "base",
  google: "google",
  inverted: "inverted",
  hide: "hide",
};

const getButton = (buttonType = BUTTON_TYPE.base) =>
  ({
    [BUTTON_TYPE.base]: BaseButton,
    [BUTTON_TYPE.inverted]: InvertedButton,
    [BUTTON_TYPE.google]: GoogleSignInButton,
  [BUTTON_TYPE.hide]: HideButton,
  }[buttonType]);

const Button = ({ children, buttonType, isLoading, ...attributes }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton disabled={isLoading} {...attributes}>{ isLoading ? <ButtonSpinner /> : children}</CustomButton>;
};

export default Button;
