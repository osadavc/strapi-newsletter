import React, { memo } from "react";
import {
  Layout,
  ContentLayout,
  Box,
  EmptyStateLayout,
  Button,
  Loader,
  BaseHeaderLayout,
} from "@strapi/design-system";
import SetupWizard from "../../components/SetupWizard";
import Cog from "@strapi/icons/Cog";

import { Link } from "react-router-dom";
import { StyledLoadingContainer } from "./styles";
import { getSetup } from "../../utils/api";
import MainContainer from "./MainContainer";

const HomePage = () => {
  const [hasSetup, setHasSetup] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(async () => {
    const { data } = await getSetup();

    setHasSetup(data);
    setIsLoading(false);
  }, []);

  return (
    <Layout>
      <BaseHeaderLayout
        title="Strapi Newsletter"
        subtitle="Notify all your users with a email as soon as you publish a new article !"
      />

      <ContentLayout>
        {isLoading ? (
          <StyledLoadingContainer
            background="neutral0"
            shadow="tableShadow"
            hasRadius
          >
            <Loader>Loading content...</Loader>
          </StyledLoadingContainer>
        ) : hasSetup ? (
          <MainContainer />
        ) : (
          <Box>
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
        )}
      </ContentLayout>
    </Layout>
  );
};

export default memo(HomePage);
