import  { useState } from 'react';
import { types } from '../Utils/regex';

const useForm = (type) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  function onChange({ target }) {
    if(error) validate(target.value);
    setValue(target.value);
  }

  function validate(value) {
    if(type === false) return true;
    if(value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if(types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    } else {
      setError(null);
      return true;
    }
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
}

export default useForm