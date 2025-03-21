import "./Auth.css";
import { useForm } from "~/shared/hook/form-hook";
import { Input } from "~/shared/FormElements/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "~/util/validators";
import Card from "~/shared/UIElements/Card";
import Button from "~/shared/FormElements/Button";
import { useContext, useState } from "react";
import { AuthContext } from "~/shared/context/AuthContext";
import { useNavigate } from "react-router";

export const Auth = () => {
  const authContext = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const navigate = useNavigate();

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false,
  );

  const loginHandler = (event: any) => {
    event.preventDefault();
    if (isLoginMode) {
      authContext.login();
      navigate("/");
    } else {
      console.log("sign up...");
    }
  };

  const switchModeHandler = (event: any) => {
    event.preventDefault();
    if (!isLoginMode) {
      let data = {
        ...formState.inputs,
      };
      delete data.name;
      setFormData(
        data,
        formState.inputs.email.isValid && formState.inputs.password.isValid,
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false,
      );
    }
    setIsLoginMode((prevState) => !prevState);
  };

  return (
    <Card className="authentication">
      <h2>Login required</h2>
      <hr />
      <form onSubmit={loginHandler}>
        {!isLoginMode && (
          <Input
            id="name"
            type="text"
            element="input"
            label="Your name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter your name."
            onInput={inputHandler}
          />
        )}
        <Input
          id="email"
          type="email"
          element="input"
          label="Email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter valid email."
          onInput={inputHandler}
        />
        <Input
          id="password"
          type="password"
          element="input"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter valid password. (at least 5 characters)"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? "Login" : "Sign up"}
        </Button>
        <Button type="button" inverse onClick={switchModeHandler}>
          Switch to {isLoginMode ? "Sign up" : "Login"}
        </Button>
      </form>
    </Card>
  );
};

export default Auth;
