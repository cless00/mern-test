import { Input } from "~/shared/FormElements/Input";
import "./PlaceForm.css";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "~/util/validators";
import Button from "~/shared/FormElements/Button";
import { useForm } from "~/shared/hook/form-hook";

export const NewPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false,
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
