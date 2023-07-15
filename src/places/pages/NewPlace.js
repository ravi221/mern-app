import React, { useCallback, useReducer } from "react";
import Input from "../../shared/components/Formelements/Input";

import "./PlaceForm.css";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import Button from "../../shared/components/Formelements/Button";
import { useForm } from "../../shared/hooks/form-hook";


const NewPlace = (props) => {
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
          },false
    )
  
  
  const placeSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs); // send this to backend
  }
  console.log(formState.isValid)
  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description"
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        label="address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address"
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid} onClick={placeSubmitHandler}>ADD PLACE</Button>
    </form>
  );
};

export default NewPlace;
