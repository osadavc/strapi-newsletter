import React, { memo } from "react";
import {
  Box,
  Tabs,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
} from "@strapi/design-system";

const MainContainer = () => {
  return (
    <Box
      padding={8}
      background="neutral0"
      shadow="tableShadow"
      hasRadius
      style={{
        marginTop: "40px",
      }}
    >
      <TabGroup
        label="Some stuff for the label"
        id="tabs"
        onTabChange={(selected) => console.log(selected)}
      >
        <Tabs>
          <Tab>Send Newsletter</Tab>
          <Tab>Sent Newsletter</Tab>
          <Tab>Subscribed Users</Tab>
        </Tabs>
        <TabPanels>
          <TabPanel>
            <Box color="neutral800" padding={4} background="neutral0">
              First panel
            </Box>
          </TabPanel>
          <TabPanel>
            <Box color="neutral800" padding={4} background="neutral0">
              Second panel
            </Box>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Box>
  );
};

export default memo(MainContainer);
