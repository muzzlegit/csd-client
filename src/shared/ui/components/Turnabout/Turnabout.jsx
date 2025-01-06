import PropTypes from "prop-types";
import { GiPoisonBottle } from "react-icons/gi";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Indicators from "./Indicators";
import { Button, Container, ImageWrap, Img, Wrap } from "./Turnabout.styled";
import { useTurnabout } from "./useTurnabout";

const Turnabout = ({ imagesList, imageSize = "200" }) => {
  const {
    index,
    quantity,
    isImage,
    handleLoadingError,
    handleNextClick,
    handlePrevClick,
  } = useTurnabout(imagesList);

  return (
    <Container>
      <Wrap>
        <Button onClick={handlePrevClick} isActive={quantity > 1}>
          <GrFormPrevious size="32" />
        </Button>
        <ImageWrap size={imageSize}>
          {isImage ? (
            <Img
              src={imagesList[index]?.url}
              alt={imagesList[index]?.alt || "Зображення"}
              onError={handleLoadingError}
            />
          ) : (
            <GiPoisonBottle size={imageSize} />
          )}
        </ImageWrap>
        <Button onClick={handleNextClick} isActive={quantity > 1}>
          <GrFormNext size="32" />
        </Button>
      </Wrap>
      <Indicators count={quantity} activeItemIndex={index} />
    </Container>
  );
};

export default Turnabout;

Turnabout.propTypes = {
  imagesList: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  imageSize: PropTypes.string,
};
