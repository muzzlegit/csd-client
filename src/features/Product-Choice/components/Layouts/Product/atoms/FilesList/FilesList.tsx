import { FilesListType } from "lib/api/createProductDTO";
import { FlexWrap } from "styles/theme/global.styled";
import { EmptyList } from "../EmptyList/EmptyList";
import { Container, FileLink, SectionTitle } from "./FilesList.styled";

type FilesListProps = {
  filesList: FilesListType;
};
export const FilesList = ({ filesList }: FilesListProps) => {
  if (!filesList) return null;
  if (!filesList.length) return <EmptyList />;

  return (
    <Container>
      {Object.entries(filesList).map(([section, files]) => {
        return (
          <div>
            <SectionTitle>{section}</SectionTitle>
            <FlexWrap key={section} flexDirection="column" gap="6px">
              {files.map(({ file, name }, index) => {
                return (
                  <FileLink
                    key={name || "" + index}
                    href={file}
                    target="_blank"
                  >
                    {name}
                  </FileLink>
                );
              })}
            </FlexWrap>
          </div>
        );
      })}
    </Container>
  );
};
