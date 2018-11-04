/* 
  useMergedState
  This is just like the useState Hook with the power of Merging.
*/

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