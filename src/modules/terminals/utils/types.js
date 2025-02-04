import PropTypes from "prop-types";

const FeatureType = PropTypes.shape({
  label: PropTypes.string,
  value: PropTypes.string,
  unit: PropTypes.string,
});

const TerminalFeaturesType = PropTypes.shape({
  pole: FeatureType,
});

const AccessoryFeaturesType = PropTypes.shape({
  color: FeatureType,
  series: FeatureType,
  type: FeatureType,
  size: FeatureType,
  voltage: FeatureType,
  current: FeatureType,
  cross_section: FeatureType,
});

const MediaFileType = PropTypes.shape({
  url: PropTypes.string,
  type: PropTypes.string,
});

export const TerminalType = PropTypes.shape({
  article: PropTypes.string.isRequired,
  catalog_article: PropTypes.string.isRequired,
  accessories: PropTypes.arrayOf(PropTypes.string),
  types: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  features: TerminalFeaturesType,
  mediaFiles: PropTypes.arrayOf(MediaFileType),
  remote_id: PropTypes.string,
  category_id: PropTypes.number,
});

export const AccessoryType = PropTypes.shape({
  article: PropTypes.string.isRequired,
  catalog_article: PropTypes.string.isRequired,
  entity: PropTypes.string,
  relateed_items: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  features: AccessoryFeaturesType,
  mediaFiles: PropTypes.arrayOf(MediaFileType),
  remote_id: PropTypes.number,
  category_id: PropTypes.number,
});
