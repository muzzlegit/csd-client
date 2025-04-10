import { useSearchItemStore } from "../../../store";
import { Container, File, FlexWrap, SectionTitle } from "./FilesList.styled";

export const FilesList = () => {
  const item = useSearchItemStore((state) => state.item);
  if (!item || !item?.files) return null;

  return (
    <Container>
      {Object.entries(item.files).map(([section, files]) => {
        return (
          <FlexWrap key={section}>
            <SectionTitle>{section}</SectionTitle>
            {files.map(({ file, name }, index) => {
              return (
                <File key={name + index} href={file} target="_blank">
                  {name}
                </File>
              );
            })}
          </FlexWrap>
        );
      })}
    </Container>
  );
};
