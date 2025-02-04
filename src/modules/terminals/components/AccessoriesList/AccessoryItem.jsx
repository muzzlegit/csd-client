import { AccessoryType } from "modules/terminals/utils/types";
import PropTypes from "prop-types";
import { CopyButton } from "shared/ui";
import { ImageBox, Img, Wrap } from "./AccessoriesList.styled";

export const AccessoryItem = ({ item, onItemClick }) => {
  if (!item?.article) return <></>;

  return (
    <Wrap>
      {item?.mediaFiles?.[0]?.url ? (
        <Img src={item?.mediaFiles?.[0]?.url} width="40px" alt={item?.id} />
      ) : (
        <ImageBox>No Image</ImageBox>
      )}
      <p
        onClick={() => {
          onItemClick(item);
        }}
      >
        {item?.description ?? item.article + " Немає опису"}
      </p>
      {item?.article && <CopyButton value={item.article} size="20" />}
    </Wrap>
  );
};

AccessoryItem.propTypes = {
  item: AccessoryType,
  onItemClick: PropTypes.func.isRequired,
};
