export const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido.',
  },
  password: {
    regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
    message: 
    'A senha precisa ter 1 caracter maiúsculo, 1 minúsculo e 1 dígito.' + 
    'Com no mínimo 8 caracteres.'
  },
  number: {
    regex: /^\d+$/,
    message: 'Utilize números apenas.'
  }
};

// function CodelandUsernameValidation(str) { 
//   const letters = 'abcdefghijklmnopqrstuvwxyz'
//   const us = '_';
//   const nums = '01234567890';
//   const additionalAllowedChars = nums + us;
//   const all = [letters, additionalAllowedChars].join("") 
//   const validations = [
//     (v) => v.length >= 4 && v.length <= 25,
//     (v) => letters.indexOf(v[0]) > -1,
//     (v) => v.split('').every(char => all.indexOf(char) > -1),
//     (v) => v[v.length - 1] !== us,
//   ]
//   if(validations.every(validator => validator(str))) {
//     return true
//   }
//     return false
// }