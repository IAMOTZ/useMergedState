const { useState } = require('react');

const useMergedState = (initialState) => {
  const [state, setter] = useState(initialState);
  let setState = setter;
  if (state.constructor.name === 'Object') {
    setState = (value) => {
      if (value && value.constructor.name === 'Object') {
        setter({
          ...state,
          ...value,
        });
      } else {
        setter(value);
      }
    };
  }
  return [state, setState];
};

module.exports = useMergedState; 