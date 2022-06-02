import React from "react";
import { Table, Thead, Tbody, Tr, Td, Th } from "@strapi/design-system/Table";
import { Typography } from "@strapi/design-system/Typography";

const NewsletterTable = ({ newsletterData }) => {
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
        {newsletterData.map((newsletter) => {
          return (
            <Tr key={newsletter.id}>
              <Td>
                <Typography textColor="neutral800">{newsletter.id}</Typography>
              </Td>

              <Td>
                <Typography textColor="neutral800">
                  {newsletter.provider}
                </Typography>
              </Td>

              <Td>
                <Typography textColor="neutral800">
                  {newsletter.email}
                </Typography>
              </Td>

              <Td>
                <Typography textColor="neutral800">
                  {new Date(newsletter.createdAt).toLocaleString()}
                </Typography>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default NewsletterTable;
