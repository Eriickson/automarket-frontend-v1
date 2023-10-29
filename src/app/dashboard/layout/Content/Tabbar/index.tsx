import React, { Fragment } from "react";
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  HStack,
  Input,
  List,
  ListItem,
  Image,
  Switch,
  Divider,
} from "@chakra-ui/react";
import { ExternalLink, Settings } from "react-feather";

export const Tabbar = () => {
  return (
    <Tabs colorScheme="purple">
      <HStack>
        <Box overflow="auto">
          <TabList>
            <Tab>
              <Text minW="max-content" fontWeight="medium">
                All integrations
              </Text>
            </Tab>
            <Tab>
              <Text minW="max-content" fontWeight="medium">
                Developer tools
              </Text>
            </Tab>
            <Tab>
              <Text minW="max-content" fontWeight="medium">
                Communication
              </Text>
            </Tab>
            <Tab>
              <Text minW="max-content" fontWeight="medium">
                Productivity
              </Text>
            </Tab>
            <Tab>
              <Text minW="max-content" fontWeight="medium">
                Browser tools
              </Text>
            </Tab>
          </TabList>
        </Box>
        <Box flex="1" />
        <Input w="md" placeholder="Search integrations" />
      </HStack>
      <TabPanels>
        <TabPanel px="0">
          <List spacing="4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, i) => (
              <Fragment key={i}>
                <ListItem>
                  <HStack>
                    <HStack flex="1" spacing="4">
                      <Image
                        w="12"
                        rounded="lg"
                        alt="logo"
                        src="https://play-lh.googleusercontent.com/2PS6w7uBztfuMys5fgodNkTwTOE6bLVB2cJYbu5GHlARAK36FzO5bUfMDP9cEJk__cE"
                      />
                      <Box>
                        <HStack spacing="3">
                          <Text fontWeight="semibold">Stripe</Text>
                          <HStack color="gray.600" spacing="1">
                            <Text textDecoration="underline" fontSize="sm">
                              stripe.com
                            </Text>
                            <ExternalLink size="1rem" />
                          </HStack>
                        </HStack>
                        <Text>
                          Stripe is a suite of APIs powering online payment processing and commerce solutions for
                          internet businesses.
                        </Text>
                      </Box>
                    </HStack>
                    <HStack spacing="4">
                      <Settings />
                      <Text>Manage</Text>
                      <Switch isChecked colorScheme="purple" />
                    </HStack>
                  </HStack>
                </ListItem>
                <Divider />
                <ListItem>
                  <HStack>
                    <HStack flex="1" spacing="4">
                      <Image
                        w="12"
                        rounded="lg"
                        alt="logo"
                        src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/n0d9usfnesuxdubkvor1"
                      />
                      <Box>
                        <HStack spacing="3">
                          <Text fontWeight="semibold">Framer</Text>
                          <HStack color="gray.600" spacing="1">
                            <Text textDecoration="underline" fontSize="sm">
                              framer.com
                            </Text>
                            <ExternalLink size="1rem" />
                          </HStack>
                        </HStack>
                        <Text>Design your website on a familiar canvas. Add animations, interactions and a CMS.</Text>
                      </Box>
                    </HStack>
                    <HStack spacing="4">
                      <Settings />
                      <Text>Manage</Text>
                      <Switch isChecked colorScheme="purple" />
                    </HStack>
                  </HStack>
                </ListItem>
                <Divider />
                <ListItem>
                  <HStack>
                    <HStack flex="1" spacing="4">
                      <Image
                        w="12"
                        rounded="lg"
                        alt="logo"
                        src="https://appthisway.com/wp-content/uploads/2018/08/webflow-logo.png"
                      />
                      <Box>
                        <HStack spacing="3">
                          <Text fontWeight="semibold">Webflow</Text>
                          <HStack color="gray.600" spacing="1">
                            <Text textDecoration="underline" fontSize="sm">
                              webflow.com
                            </Text>
                            <ExternalLink size="1rem" />
                          </HStack>
                        </HStack>
                        <Text>Create professional, custom websites in a completely visual canvas with no code.</Text>
                      </Box>
                    </HStack>
                    <HStack spacing="4">
                      <Settings />
                      <Text>Manage</Text>
                      <Switch isChecked colorScheme="purple" />
                    </HStack>
                  </HStack>
                </ListItem>
                <Divider />
                <ListItem>
                  <HStack>
                    <HStack flex="1" spacing="4">
                      <Image
                        w="12"
                        rounded="lg"
                        alt="logo"
                        src="https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png"
                      />
                      <Box>
                        <HStack spacing="3">
                          <Text fontWeight="semibold">Slack</Text>
                          <HStack color="gray.600" spacing="1">
                            <Text textDecoration="underline" fontSize="sm">
                              slack.com
                            </Text>
                            <ExternalLink size="1rem" />
                          </HStack>
                        </HStack>
                        <Text>Create professional, custom websites in a completely visual canvas with no code.</Text>
                      </Box>
                    </HStack>
                    <HStack spacing="4">
                      <Settings />
                      <Text>Manage</Text>
                      <Switch isChecked colorScheme="purple" />
                    </HStack>
                  </HStack>
                </ListItem>
              </Fragment>
            ))}
          </List>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
