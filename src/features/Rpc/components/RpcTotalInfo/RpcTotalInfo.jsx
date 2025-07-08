import { copyToClipboard } from "shared/helpers";
import {
  Acent,
  Block,
  Container,
  Content,
  Schema,
  Text,
  Title,
  Wrap,
} from "./RpcTotalInfo.styled";
import useRpcTotalInfo from "./useRpcTotalInfo";

export const RpcTotalInfo = () => {
  const {
    totalPower,
    stepsAmount,
    mainSwitchCurrent,
    capacitors,
    contactors,
    fuseholders,
    fuses,
    rpcSchema,
  } = useRpcTotalInfo();

  return (
    <Container>
      <Wrap>
        <Text>Повна потужність:</Text>
        <Acent>{totalPower} кВАр</Acent>
      </Wrap>
      <Wrap>
        <Text>Кількість ступенів:</Text>
        <Acent>{stepsAmount}</Acent>
      </Wrap>
      <Wrap>
        <Text>Струм головного вимикача:</Text>
        <Acent>{mainSwitchCurrent} A</Acent>
      </Wrap>
      <Schema
        onClick={() => {
          copyToClipboard(rpcSchema);
        }}
      >
        {rpcSchema}
      </Schema>
      <Content>
        <Block>
          <div>
            <Title>Конденсатори</Title>
            {Object.entries(capacitors).map(([power, quantity]) => (
              <div key={power + "cap"}>
                <p>{power + " кВАр - " + quantity + " шт"}</p>
              </div>
            ))}
          </div>
          <div>
            <Title>Контактори</Title>
            {Object.entries(contactors).map(([power, quantity]) => (
              <div key={power + "con"}>
                <p>{power + " кВАр - " + quantity + " шт"}</p>
              </div>
            ))}
          </div>
        </Block>
        <Block>
          <div>
            <Title>Запобіжники</Title>

            {Object.entries(fuses).map(([current, quantity]) => (
              <div key={current + "cur"}>
                <p>{current + " A - " + quantity + " шт"}</p>
              </div>
            ))}
          </div>
          <div>
            <Title>Тримачі</Title>
            {Object.entries(fuseholders).map(([size, quantity]) => (
              <div key={size + "hol"}>
                <p>{size + " - " + quantity + " шт"}</p>
              </div>
            ))}
          </div>
        </Block>
      </Content>
    </Container>
  );
};
