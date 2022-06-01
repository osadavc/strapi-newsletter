import React, { memo } from "react";
import { Box, TabPanel } from "@strapi/design-system";

const SendNewsletter = () => {
  return (
    <TabPanel>
      <Box color="neutral800" paddingTop={8} background="neutral0">
        <h1>Hello</h1>
      </Box>
    </TabPanel>
  );
};

export default memo(SendNewsletter);
