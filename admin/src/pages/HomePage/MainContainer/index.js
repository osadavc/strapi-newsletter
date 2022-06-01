import React, { memo } from "react";
import { Box, Tabs, Tab, TabGroup, TabPanels } from "@strapi/design-system";
import SendNewsletter from "./SendNewsletter";
import SubscribedUsers from "./SubscribedUsers";

const MainContainer = () => {
  return (
    <Box padding={8} background="neutral0" shadow="tableShadow" hasRadius>
      <TabGroup
        label="Strapi Newsletter"
        id="tabs"
        onTabChange={(selected) => console.log(selected)}
      >
        <Tabs>
          <Tab>Send Newsletter</Tab>
          <Tab>Sent Newsletter</Tab>
          <Tab>Subscribed Users</Tab>
        </Tabs>
        <TabPanels>
          <SendNewsletter />
          <SendNewsletter />
          <SubscribedUsers />
        </TabPanels>
      </TabGroup>
    </Box>
  );
};

export default memo(MainContainer);
