import React, { memo } from "react";
import pluginId from "../../pluginId";
import {
  Layout,
  ContentLayout,
  Box,
  EmptyStateLayout,
  Button,
} from "@strapi/design-system";
import SetupWizard from "../../components/SetupWizard";
import Cog from "@strapi/icons/Cog";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Layout>
      <ContentLayout>
        <Box padding={8} background="neutral100">
          <EmptyStateLayout
            icon={
              <div
                style={{
                  height: "200px",
                  padding: "10px",
                }}
              >
                <SetupWizard />
              </div>
            }
            content="You haven't set up your newsletter provider yet."
            action={
              <Link
                to="/settings/strapi-newsletter"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" startIcon={<Cog />}>
                  Setup Newsletter Provider
                </Button>
              </Link>
            }
          />
        </Box>
      </ContentLayout>
    </Layout>
  );
};

export default memo(HomePage);
