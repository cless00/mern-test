import { Input } from "~/shared/FormElements/Input";
import "./NewPlace.css";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "~/util/validators";
import { useCallback, useReducer } from "react";
import Button from "~/shared/FormElements/Button";

type InputType = {
  value: string | undefined;
  isValid: boolean;
};
type StateType = {
  inputs: {
    [title: string]: InputType;
    description: InputType;
  };
  isValid: boolean;
};
type ActionType = {
  type: "INPUT_CHANGE";
  inputId: string;
  isValid: boolean;
  value: string | undefined;
};

const formReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {
            value: action.value,
            isValid: action.isValid,
          },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

export const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });

  const inputHandler = useCallback(
    (id: string, value: string | undefined, isValid: boolean) => {
      dispatch({
        type: "INPUT_CHANGE",
        value: value,
        isValid: isValid,
        inputId: id,
      });
    },
    [],
  );

  const placeAddHandler = (event: any) => {
    // todo: send to backend
    event.preventDefault();
    console.log(formState.inputs);
  };
  return (
    <form className="place-form" onSubmit={placeAddHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        errorText="Please enter a valid title."
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
      />
      <Input
        id="description"
        type="text"
        label="Description"
        errorText="Please enter a valid description. (at least 5 characters)"
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        type="text"
        label="Address"
        errorText="Please enter a valid address."
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Add place
      </Button>
    </form>
  );
};

export default NewPlace;
