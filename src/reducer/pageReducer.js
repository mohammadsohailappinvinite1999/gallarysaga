const pageReducer = (state = 1, action) => {
  switch (action.type) {
    case "NEXT_PAGE":
      return state + 1;
    case "PAGE_RESET":
      return 1;
    default:
      return state;
  }
};

export default pageReducer;
