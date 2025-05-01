import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
import { useUserTheme } from "styles/theme/useTheme";
import { ButtonBox, Container } from "./ThemeSwitch.styled";

export const ThemeSwitch = () => {
  const { themeName, setTheme } = useUserTheme();

  return (
    <Container>
      <ButtonBox
        isActive={themeName === "dark"}
        onClick={() => {
          setTheme("dark");
        }}
      >
        <RiMoonClearLine size="26" />
      </ButtonBox>
      <ButtonBox
        isActive={themeName === "light"}
        onClick={() => {
          setTheme("light");
        }}
      >
        <RiSunLine size="26" />
      </ButtonBox>
    </Container>
  );
};
