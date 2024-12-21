import useSwitchesStore from "modules/switches/store/useSwitchesStore";
import Layout from "../Layout/Layout";
import { Container, Link, Title, Wrap } from "./FilesList.styled";

const FilesList = () => {
  const queryItem = useSwitchesStore((state) => state.queryItem);
  const isFiles = queryItem?.files;

  return (
    <Layout title="Документи">
      {isFiles ? (
        <Container>
          {Object.entries(queryItem.files).map(([title, files]) => {
            return (
              <div key={title}>
                <Title>{title}</Title>
                <Wrap>
                  {Object.values(files).map((file) => {
                    return (
                      <Link key={file?.size} href={file?.file}>
                        {file?.name}
                      </Link>
                    );
                  })}
                </Wrap>
              </div>
            );
          })}
        </Container>
      ) : null}
    </Layout>
  );
};

export default FilesList;
