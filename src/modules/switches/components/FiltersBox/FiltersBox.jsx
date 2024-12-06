import { Select } from "shared/ui";
import Layout from "../Layout/Layout";

const FiltersBox = () => {
  return (
    <Layout title="Фільтри">
      <div>
        <Select
          label="Виробник"
          placeholder="Всі"
          value=""
          options={[
            { label: "Telergon", value: "telergon" },
            { label: "Tele", value: "tele" },
          ]}
          onChange={() => {}}
          width="60px"
        />
      </div>
    </Layout>
  );
};

export default FiltersBox;
