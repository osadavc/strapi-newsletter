import React from "react";

import {
  Layout,
  ContentLayout,
  BaseHeaderLayout,
  Select,
  Option,
  Button,
  TextInput,
  Box,
} from "@strapi/design-system";

import { ButtonContainer, InputContainer, StyledTypography } from "./styles";

const Settings = () => {
  const [selectedProvider, setSelectedProvider] = React.useState();
  const [fields, setFields] = React.useState({
    apiKey: "",
    dc: "",
  });
  const [keys, setKeys] = React.useState({});

  const providers = ["mailchimp", "convert-kit", "mailer-lite"];

  const providerFunctions = {
    mailchimp: {
      name: "Mailchimp",
      validator: () => {
        if (!fields.apiKey || !fields.dc) {
          return false;
        }

        return true;
      },
      renderView: () => (
        <InputContainer>
          <div>
            <TextInput
              placeholder="API Key"
              label="API Key"
              required
              onChange={(e) =>
                setFields((prev) => ({
                  ...prev,
                  apiKey: e.target.value,
                }))
              }
              value={fields.apiKey}
            />
          </div>

          <div>
            <TextInput
              placeholder="DC"
              label="DC"
              required
              onChange={(e) =>
                setFields((prev) => ({
                  ...prev,
                  dc: e.target.value,
                }))
              }
              value={fields.dc}
            />
          </div>
        </InputContainer>
      ),
    },
    "convert-kit": {
      name: "Convert Kit",
      renderView: () => <div></div>,
    },
    "mailer-lite": {
      name: "Mailer Lite",
      renderView: () => <div></div>,
    },
  };

  return (
    <Layout>
      <BaseHeaderLayout
        title="Strapi Newsletter"
        subtitle="Setup Your Newsletter Provider"
      />

      <ContentLayout>
        <Box padding={8} shadow="tableShadow" background="neutral0" hasRadius>
          <Select
            label="Email Newsletter Provider"
            value={selectedProvider}
            onChange={(e) => {
              console.log(e);
              setSelectedProvider(e);
            }}
          >
            {providers.map((provider) => (
              <Option key={provider} value={provider}>
                {providerFunctions[provider].name}
              </Option>
            ))}
          </Select>
          <div>
            {selectedProvider &&
              providerFunctions[selectedProvider].renderView()}
          </div>

          <StyledTypography as="h3">
            Configure A Newsletter Provider and Click On Check Connection Button
            After Saving Your Settings To Check If Your API Keys are Working.
          </StyledTypography>

          <ButtonContainer>
            <Button
              onClick={() => {
                const validateResponse =
                  providerFunctions[selectedProvider].validator();

                if (!validateResponse) return;
              }}
            >
              Save Keys
            </Button>
            <Button
              variant="tertiary"
              disabled={Object.entries(keys).length == 0}
            >
              Check Connection
            </Button>
          </ButtonContainer>
        </Box>
      </ContentLayout>
    </Layout>
  );
};

export default Settings;
