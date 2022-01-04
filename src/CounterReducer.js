const initStore = {
  counter: 0,
};

export const CounterReducer = (state = initStore, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };

    case "DECEREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return { ...state };
  }
};
