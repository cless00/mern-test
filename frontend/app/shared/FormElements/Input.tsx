import { type PropsWithChildren, useEffect, useReducer } from "react";
import "./Input.css";
import { validate } from "~/util/validators";

type StateType = { value?: string; isValid: boolean; isTouched: boolean };
type ActionType = {
  type: "CHANGE" | "TOUCH" | undefined;
  val?: string;
  validators?: any[];
};

const inputReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return { ...state, isTouched: true };
    default:
      return state;
  }
};
export const Input = (
  props: PropsWithChildren<{
    element?: "input" | "textarea";
    id: string;
    label: string;
    type: string;
    placeholder?: string;
    rows?: number;
    errorText?: string;
    validators?: any[];
    onInput: (id: string, value: string | undefined, isValid: boolean) => void;
    initialValue?: string | undefined;
    initialValid?: boolean;
  }>,
) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isValid: props.initialValid || false,
    isTouched: false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, onInput, value, isValid]);

  const changeHandler = (event: any) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = (event: any) => {
    dispatch({ type: "TOUCH" });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        value={value}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
      />
    ) : (
      <textarea
        rows={props.rows || 3}
        value={value}
        onChange={changeHandler}
        onBlur={touchHandler}
      />
    );
  return (
    <div
      className={`form-control ${!inputState.isValid && inputState.isTouched && "form-control--invalid"}`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};
