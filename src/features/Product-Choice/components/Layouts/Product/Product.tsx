import { ProductDTO } from "lib/api/createProductDTO";
import { CopyButton, Turnabout } from "shared/ui";
import { FlexWrap } from "styles/theme/global.styled";
import { Container, Description, ImageWrap, OnStock } from "./Product.styled";
import { TabsLayout } from "./atoms/TabsLayout/TabsLayout";
import { useTabs } from "./atoms/TabsLayout/useTabs";

type ProductProps = {
  product: ProductDTO | undefined;
};

export const Product = ({ product }: ProductProps) => {
  if (!product) return null;
  const { mediaFiles, description, balance, article } = product;
  const { tabs, activeTab, handleTabChange, ActiveTabComponent } = useTabs();

  const activeTabProps = {
    features: { featuresList: product.features },
    files: { filesList: product.files },
    accesories: { accesoriesList: product.accesories },
    analogs: { analogsList: product.analogs },
  }[activeTab];

  return (
    <Container>
      <FlexWrap
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        margin="0 0 8px 0"
      >
        <CopyButton value={article} size="18" title="Скопіювати артикул">
          {article}
        </CopyButton>
        <Description>{description}</Description>
        <OnStock isOnStock={balance === "в наявності"} title={balance || ""} />
      </FlexWrap>
      <FlexWrap gap="8px">
        <ImageWrap>
          <Turnabout imagesList={mediaFiles} />
        </ImageWrap>
        <TabsLayout
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        >
          <ActiveTabComponent {...activeTabProps} />
        </TabsLayout>
      </FlexWrap>
    </Container>
  );
};
