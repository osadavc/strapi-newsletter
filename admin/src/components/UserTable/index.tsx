import React from "react";
import { Table, Thead, Tbody, Tr, Td, Th } from "@strapi/design-system/Table";
import { Typography } from "@strapi/design-system/Typography";

const UserTable = ({ userData }) => {
  return (
    <Table colCount={4} rowCount={10}>
      <Thead>
        <Tr>
          <Th>
            <Typography variant="sigma">ID</Typography>
          </Th>

          <Th>
            <Typography variant="sigma">Provider</Typography>
          </Th>

          <Th>
            <Typography variant="sigma">Email</Typography>
          </Th>

          <Th>
            <Typography variant="sigma">Registered At</Typography>
          </Th>
        </Tr>
      </Thead>

      <Tbody>
        {userData.map((user) => {
          return (
            <Tr key={user.id}>
              <Td>
                <Typography textColor="neutral800">{user.id}</Typography>
              </Td>

              <Td>
                <Typography textColor="neutral800">{user.provider}</Typography>
              </Td>

              <Td>
                <Typography textColor="neutral800">{user.email}</Typography>
              </Td>

              <Td>
                <Typography textColor="neutral800">
                  {new Date(user.createdAt).toLocaleString()}
                </Typography>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default UserTable;
