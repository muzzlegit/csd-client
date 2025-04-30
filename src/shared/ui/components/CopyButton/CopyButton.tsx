import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { FaRegCopy } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { GoX } from "react-icons/go";
import { copyToClipboard } from "shared/helpers";
import { Button } from "./CopyButton.styled";

const initialState = {
  copy: FaRegCopy,
  success: GiCheckMark,
  failed: GoX,
} as const;

export type InitialStateType = typeof initialState;

type CopyButtonProps = {
  size?: string;
  value: string | number;
  title?: string;
  children?: ReactNode;
};

export const CopyButton = ({
  size = "24",
  value,
  title,
  children,
}: CopyButtonProps) => {
  const [state, setState] = useState<keyof InitialStateType>("copy");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const Icon = initialState[state];

  const handleCopy = useCallback(async () => {
    const result = await copyToClipboard(value);
    setState(result ? "success" : "failed");
    timeoutRef.current = setTimeout(() => {
      setState("copy");
    }, 600);
  }, [value]);

  useEffect(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  return (
    <Button state={state} onClick={handleCopy} title={title}>
      <Icon size={size} />
      {children}
    </Button>
  );
};
