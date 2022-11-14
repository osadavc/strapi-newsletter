import React, { memo } from "react";
import { Box, TabPanel, EmptyStateLayout } from "@strapi/design-system";
import { getSentNewsletter } from "../../../utils/api";
import NoUsers from "../../../components/NoUsers";
import NewsletterTable from "../../../components/NewsletterTable";

const SubscribedUsers = () => {
  const [allNewsletter, setAllNewsletter] = React.useState([]);

  React.useEffect(() => {
    getSentNewsletter().then(({ data }) => {
      setAllNewsletter(data);
    });
  }, []);

  return (
    <TabPanel>
      <Box color="neutral800" paddingTop={8} background="neutral0">
        {allNewsletter.length == 0 ? (
          <EmptyStateLayout
            icon={<NoUsers />}
            content="You have not sent any newsletter yet. Go to newsletter tab to send newsletter"
          />
        ) : (
          <NewsletterTable newsletterData={allNewsletter} />
        )}
      </Box>
    </TabPanel>
  );
};

export default memo(SubscribedUsers);
