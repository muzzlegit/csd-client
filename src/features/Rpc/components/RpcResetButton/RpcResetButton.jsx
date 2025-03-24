import useRpcStore from "features/Rpc/store";
import { RiDeleteBin3Line } from "react-icons/ri";
import { Button } from "./RpcResetButton.styled.";

export const RpcResetButton = () => {
  const reset = useRpcStore((state) => state.clearRpc);

  return (
    <Button onClick={reset}>
      Очистити
      <RiDeleteBin3Line />
    </Button>
  );
};
