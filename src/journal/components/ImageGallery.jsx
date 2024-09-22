import PropTypes from "prop-types";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export const ImageGallery = ({ images = [] }) => {
  return (
    <>
      {images?.length > 0 && (
        <ImageList sx={{ width: "100%", height: 500 }} cols={4} rowHeight={200}>
          {images?.map((imageUrl) => (
            <ImageListItem key={imageUrl}>
              <img
                srcSet={`${imageUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${imageUrl}?w=164&h=164&fit=crop&auto=format`}
                alt="note image"
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
};
