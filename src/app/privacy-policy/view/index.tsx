import React from "react";

import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";

import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";

import { Paragraph } from "./components/Paragraph";

export const PrivacyPolicy = () => {
  return (
    <ScreenAreaDelimiter>
      <Heading fontSize="xl">Politicas de privacidad</Heading>
      <Text fontSize="xs">Last updated: December 30, 2023</Text>
      <br />
      <Paragraph>
        This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
        information when You use the Service and tells You about Your privacy rights and how the law protects You.
      </Paragraph>
      <Box h="4" />
      <Paragraph>
        We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection
        and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the
        help of the{" "}
        <a href="https://www.privacypolicies.com/privacy-policy-generator/" target="_blank">
          Privacy Policy Generator
        </a>
        .
      </Paragraph>
      <br />
      <Heading fontSize="lg">Interpretation and Definitions</Heading>
      <Box h="2" />
      <Heading fontSize="md">Interpretation</Heading>
      <Box h="2" />
      <Paragraph>
        The words of which the initial letter is capitalized have meanings defined under the following conditions. The
        following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
      </Paragraph>
      <Box h="2" />
      <Heading fontSize="md">Definitions</Heading>
      <Box h="2" />
      <Paragraph>For the purposes of this Privacy Policy:</Paragraph>
      <Box h="4" />
      <UnorderedList spacing="2.5">
        <ListItem>
          <Paragraph>
            <Text as="span" fontWeight="semibold">
              Account
            </Text>{" "}
            means a unique account created for You to access our Service or parts of our Service.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            <Text as="span" fontWeight="semibold">
              Affiliate
            </Text>{" "}
            means an entity that controls, is controlled by or is under common control with a party, where
            &ldquo;control&ldquo; means ownership of 50% or more of the shares, equity interest or other securities
            entitled to vote for election of directors or other managing authority.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            <Text as="span" fontWeight="semibold">
              Company
            </Text>{" "}
            (referred to as either &ldquo;the Company&ldquo;, &ldquo;We&ldquo;, &ldquo;Us&ldquo; or &ldquo;Our&ldquo; in
            this Agreement) refers to Automarket.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            <Text as="span" fontWeight="semibold">
              Cookies
            </Text>{" "}
            are small files that are placed on Your computer, mobile device or any other device by a website, containing
            the details of Your browsing history on that website among its many uses.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            <Text as="span" fontWeight="semibold">
              Country
            </Text>{" "}
            refers to: Dominican Republic
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            <Text as="span" fontWeight="semibold">
              Device
            </Text>{" "}
            means any device that can access the Service such as a computer, a cellphone or a digital tablet.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            <Text as="span" fontWeight="semibold">
              Personal Data
            </Text>{" "}
            is any information that relates to an identified or identifiable individual.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            <Text as="span" fontWeight="semibold">
              Service
            </Text>{" "}
            refers to the Website.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            <Text as="span" fontWeight="semibold">
              Service Provider
            </Text>{" "}
            means any natural or legal person who processes the data on behalf of the Company. It refers to third-party
            companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf
            of the Company, to perform services related to the Service or to assist the Company in analyzing how the
            Service is used.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            <Text as="span" fontWeight="semibold">
              Third-party Social Media Service
            </Text>{" "}
            refers to any website or any social network website through which a User can log in or create an account to
            use the Service.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            <Text as="span" fontWeight="semibold">
              Usage Data
            </Text>{" "}
            refers to data collected automatically, either generated by the use of the Service or from the Service
            infrastructure itself (for example, the duration of a page visit).
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            <Text as="span" fontWeight="semibold">
              Website
            </Text>{" "}
            refers to Automarket, accessible from{" "}
            <a href="automarket.agency" rel="external nofollow noopener" target="_blank">
              automarket.agency
            </a>
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            <Text as="span" fontWeight="semibold">
              You
            </Text>{" "}
            means the individual accessing or using the Service, or the company, or other legal entity on behalf of
            which such individual is accessing or using the Service, as applicable.
          </Paragraph>
        </ListItem>
      </UnorderedList>
    </ScreenAreaDelimiter>
  );
};
