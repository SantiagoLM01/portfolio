import { useState } from "react";
const useForm = () => {
  const initialForm = {
    nombre: "",
    tema: "",
    mensaje: "",
  };

  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};

export default useForm;
