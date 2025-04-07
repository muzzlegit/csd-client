import { configObj } from "features/BusbarsCurrent/utils/config";
import { BusbarsMaterialType } from "features/BusbarsCurrent/utils/types";
import PropTypes from "prop-types";
import { VectorLink } from "shared/components/VectorLink/VectorLink";
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
      <VectorLink linkName="copper" />
    </Container>
  );
};

export default BusbarsLayout;

BusbarsLayout.propTypes = {
  busbarsMaterial: BusbarsMaterialType.isRequired,
  children: PropTypes.node.isRequired,
};
