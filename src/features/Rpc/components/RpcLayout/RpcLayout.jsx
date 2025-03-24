import capacitorsImg from "shared/assets/images/capacitor.webp";

import { VectorLink } from "shared/components/VectorLink/VectorLink";
import { RpcCoefficient } from "../RpcCoefficient/RpcCoefficient";
import { RpcResetButton } from "../RpcResetButton/RpcResetButton";
import { RpcStepsList } from "../RpcStepsList/RpcStepsList";
import { RpcTotalInfo } from "../RpcTotalInfo/RpcTotalInfo";
import { Ventilation } from "../Ventilation/Ventilation";
import {
  ColWrap,
  Container,
  Content,
  Img,
  LinkWrap,
  Wrap,
} from "./RpcLayout.styled";

export const RpcLayout = () => {
  return (
    <Container>
      <Wrap>
        <Img src={capacitorsImg} alt="capacitors" />
        <Content>
          <ColWrap>
            <LinkWrap>
              <VectorLink linkName="rpc" />
            </LinkWrap>
            <RpcResetButton />
          </ColWrap>
          <RpcCoefficient />
          <Ventilation />
        </Content>
      </Wrap>
      <Content>
        <RpcStepsList />
        <RpcTotalInfo />
      </Content>
    </Container>
  );
};
