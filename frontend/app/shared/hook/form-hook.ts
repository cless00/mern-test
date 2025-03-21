import { useCallback, useReducer } from "react";

type InputType = {
  value: string | undefined;
  isValid: boolean;
};
type InputsType = {
  [title: string]: InputType;
  description: InputType;
  address: InputType;
};
type StateType = {
  inputs: InputsType;
  isValid: boolean;
};
type ActionType = {
  type: "INPUT_CHANGE" | "SET_DATA";
  inputId?: string;
  isValid: boolean;
  value?: string;
  inputs?: InputsType;
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
          [action.inputId!]: {
            value: action.value,
            isValid: action.isValid,
          },
        },
        isValid: formIsValid,
      };
    case "SET_DATA":
      return {
        inputs: action.inputs!,
        isValid: action.isValid,
      };
    default:
      return state;
  }
};

export const useForm = (
  initialInputs: InputsType,
  validity: boolean,
): [
  StateType,
  (id: string, value: string | undefined, isValid: boolean) => void,
  (inputData: InputsType, isValid: boolean) => void,
] => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: validity,
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

  const setFormData = useCallback((inputData: InputsType, isValid: boolean) => {
    dispatch({
      type: "SET_DATA",
      inputs: inputData,
      isValid: isValid,
    });
  }, []);

  return [formState, inputHandler, setFormData];
};
