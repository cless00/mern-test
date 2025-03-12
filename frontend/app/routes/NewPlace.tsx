import { Input } from "~/shared/FormElements/Input";
import "./NewPlace.css";
import {
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "~/util/validators";
import { useCallback } from "react";

export const NewPlace = () => {
  const titleInputHandler = useCallback(
    (id: string, value: string | undefined, isValid: boolean) => {},
    [],
  );

  const descriptionInputHandler = useCallback(
    (id: string, value: string | undefined, isValid: boolean) => {},
    [],
  );

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        errorText="Please enter a valid title."
        validators={[VALIDATOR_REQUIRE()]}
        onInput={titleInputHandler}
      />
      <Input
        id="description"
        type="text"
        label="Description"
        errorText="Please enter a valid description."
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={descriptionInputHandler}
      />
    </form>
  );
};

export default NewPlace;
