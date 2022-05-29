import React from "react";

import { Layout, ContentLayout, BaseHeaderLayout } from "@strapi/design-system";

const Settings = () => {
  return (
    <Layout>
      <BaseHeaderLayout
        title="Strapi Newsletter"
        subtitle="Setup Your Newsletter Provider"
      />

      <ContentLayout>
        <h1>Hello World</h1>
      </ContentLayout>
    </Layout>
  );
};

export default Settings;
