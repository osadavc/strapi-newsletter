import React, { memo } from "react";
import { Box, TabPanel, TextInput, Button, Alert } from "@strapi/design-system";
import "react-quill/dist/quill.snow.css";
import { StyledQuill, StyledTypography } from "./styles";
import { sendNewsletter } from "../../../../utils/api";

const SendNewsletter = () => {
  const [subject, setSubject] = React.useState("");
  const [body, setBody] = React.useState("");

  const [isSuccessful, setIsSuccessful] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const handleSendNewsletter = async () => {
    try {
      const { data } = await sendNewsletter({ subject, body });

      setIsSuccessful(true);
      setIsError(false);
    } catch (error) {
      setIsSuccessful(false);
      setIsError(true);
    }
  };

  return (
    <TabPanel>
      {isSuccessful && (
        <Box paddingTop={4}>
          <Alert
            closeLabel="Close alert"
            title="Success"
            variant="success"
            onClose={() => {
              setIsSuccessful(false);
            }}
          >
            Successfully Sent Newsletter
          </Alert>
        </Box>
      )}

      {isError && (
        <Box paddingTop={4}>
          <Alert
            closeLabel="Close alert"
            title="Error"
            variant="danger"
            onClose={() => {
              setIsError(false);
            }}
          >
            Error Occurred
          </Alert>
        </Box>
      )}

      <Box color="neutral800" paddingTop={8} background="neutral0">
        <Box>
          <TextInput
            placeholder="Email Subject"
            label="Email Subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
        </Box>
        <Box paddingTop={4}>
          <StyledTypography>Email Body</StyledTypography>
          <StyledQuill
            value={body}
            onChange={(text) => setBody(text)}
            placeholder="Type Your Newsletter Body Here"
            
          />
          <Box paddingTop={6}>
            <Button onClick={handleSendNewsletter}>Send Newsletter</Button>
          </Box>
        </Box>
      </Box>
    </TabPanel>
  );
};

export default memo(SendNewsletter);
