// eslint-disable-next-line import/no-anonymous-default-export
export default (
  state = {
    images: [],
    loading: false,
    err: null,
  },
  action
) => {
  switch (action.type) {
    case "IMAGE_LOAD":
      return { ...state, loading: true, err: null };
    case "IMAGE_SUCCESS":
      return {
      ...state,
        loading: false,
        err: null,
        images: [...state.images, ...action.payload],
      };
    case "IMAGE_FAIL":
      return {
        ...state,
        err: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
