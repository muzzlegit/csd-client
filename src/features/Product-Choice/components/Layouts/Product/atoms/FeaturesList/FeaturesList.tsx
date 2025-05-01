import { FeaturesListType } from "lib/api/createProductDTO";
import { FlexWrap } from "styles/theme/global.styled";
import { EmptyList } from "../EmptyList/EmptyList";
import { Container, Feature, Property, Separator } from "./FeaturesList.styled";

type FeaturesListProps = {
  featuresList: FeaturesListType;
};

export const FeaturesList = ({ featuresList }: FeaturesListProps) => {
  if (!featuresList) return null;
  if (!featuresList.length) return <EmptyList />;
  return (
    <Container>
      {featuresList.map(({ title, unit, value }) => {
        return (
          <Feature key={title}>
            <Property>{title} </Property>
            <Separator />
            <FlexWrap gap="4px">
              <Property>{value}</Property>
              {unit ? <Property>{unit}</Property> : null}
            </FlexWrap>
          </Feature>
        );
      })}
    </Container>
  );
};
