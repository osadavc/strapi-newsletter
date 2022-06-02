import React, { memo } from "react";
import {
  Box,
  Divider,
  Button,
  Select,
  Option,
  Checkbox,
} from "@strapi/design-system";
import {
  useCMEditViewDataManager,
  useNotification,
} from "@strapi/helper-plugin";
import { sendNewsletter } from "../../utils/api";
import showdown from "showdown";

const SendNewsletterEditView = () => {
  const {
    modifiedData,
    layout: { attributes },
  } = useCMEditViewDataManager();
  const toggleNotification = useNotification();

  const [subject, setSubject] = React.useState();
  const [body, setBody] = React.useState();
  const [isMarkdown, setIsMarkdown] = React.useState(false);

  const handleSendNewsletter = async () => {
    const converter = new showdown.Converter();

    await sendNewsletter({
      subject: modifiedData[subject],
      body: !isMarkdown
        ? modifiedData[body]
        : converter.makeHtml(modifiedData[body]),
    });

    toggleNotification({
      type: "success",
      message: "Successfully Sent Newsletter",
    });
  };

  return (
    <div>
      <Box padding={4}>
        <Divider />
      </Box>

      <Box paddingTop={5}>
        <Select
          placeholder="Field For Subject"
          value={subject}
          onChange={(e) => {
            setSubject(e);
          }}
        >
          {Object.keys(attributes).map((item, i) => (
            <Option key={i} value={item}>
              {item}
            </Option>
          ))}
        </Select>
      </Box>

      <Box paddingTop={5}>
        <Select
          placeholder="Field For Body"
          value={body}
          onChange={(e) => {
            setBody(e);
          }}
        >
          {Object.keys(attributes).map((item, i) => (
            <Option key={i} value={item}>
              {item}
            </Option>
          ))}
        </Select>
      </Box>

      <Box paddingTop={5} paddingBottom={5}>
        <Checkbox
          checked={isMarkdown}
          onClick={() => {
            setIsMarkdown((prev) => !prev);
          }}
        >
          Is Body Markdown
        </Checkbox>
      </Box>

      <Button onClick={handleSendNewsletter}>
        Send Newsletter To Subscribed Users
      </Button>
    </div>
  );
};

export default memo(SendNewsletterEditView);
