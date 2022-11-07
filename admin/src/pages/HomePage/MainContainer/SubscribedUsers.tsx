import React, { memo } from "react";
import { Box, TabPanel, EmptyStateLayout } from "@strapi/design-system";
import UserTable from "../../../components/UserTable";
import { getAllRegisteredUsers } from "../../../utils/api";
import NoUsers from "../../../components/NoUsers";

const SubscribedUsers = () => {
  const [allUsers, setAllUsers] = React.useState([]);

  React.useEffect(() => {
    getAllRegisteredUsers().then(({ data }) => {
      setAllUsers(data);
    });
  }, []);

  return (
    <TabPanel>
      <Box color="neutral800" paddingTop={8} background="neutral0">
        {allUsers.length == 0 ? (
          <EmptyStateLayout
            icon={<NoUsers />}
            content="No users have registered so far, read the docs to learn how a user can register"
          />
        ) : (
          <UserTable userData={allUsers} />
        )}
      </Box>
    </TabPanel>
  );
};

export default memo(SubscribedUsers);
