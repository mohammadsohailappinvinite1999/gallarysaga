const loadImages = () => {
  return { type: "IMAGE_LOAD" };
};

const setImages = (images) => {
  return {
    type: "IMAGE_SUCCESS",
  payload: images,
  };
};

const setError = (error) => {
  return {
    type: "IMAGE_FAIL",
    payload: error,
  };
};

const nextPage = () => {
  return { type: "NEXT_PAGE" };
};

export { loadImages, setImages, setError, nextPage };
