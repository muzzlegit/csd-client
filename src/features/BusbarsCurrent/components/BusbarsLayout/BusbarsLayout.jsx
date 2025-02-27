import { configObj } from "features/BusbarsCurrent/config";
import { BusbarsMaterialType } from "features/BusbarsCurrent/types";
import PropTypes from "prop-types";
import BusbarsImg from "../BusbarsImg/BusbarsImg";
import { Container, Title } from "./BusbarsLayout.styled";

const BusbarsLayout = ({ busbarsMaterial, children }) => {
  return (
    <Container>
      <BusbarsImg busbarsMaterial={busbarsMaterial} />
      <Title bgColor={configObj?.color?.[busbarsMaterial]}>
        {configObj?.title?.[busbarsMaterial]}
      </Title>
      {children}
    </Container>
  );
};

export default BusbarsLayout;

BusbarsLayout.propTypes = {
  busbarsMaterial: BusbarsMaterialType.isRequired,
  children: PropTypes.node.isRequired,
};
