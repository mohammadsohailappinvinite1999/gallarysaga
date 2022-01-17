import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadImages, nextPage } from "../../actions/imageActions";
import Button from "../Button/Button";
import "./index.css";
const ImageGrid = () => {
  const { images, error, loading } = useSelector((state) => state.images);
  const { page } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadImages());
  }, [page]);

  return (
    <div className="content">
      <section className="grid">
        {images.map((image) => (
          <div
            key={image.id}
            className={`item item-${Math.ceil(image.height / image.width)}`}
          >
            {/* <Stats stats={imageStats[image.id]} /> */}
            <img src={image.src.small} alt={"qwe"} />
          </div>
        ))}
      </section>
      {error && <div className="error">{JSON.stringify(error)}</div>}
      <Button
        onClick={() => !loading && dispatch(nextPage())}
        loading={loading}
      >
        Load More
      </Button>
    </div>
  );
};

export default ImageGrid;
