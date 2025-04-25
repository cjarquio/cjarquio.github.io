import { Container, Flex, Group, Tabs } from '@mantine/core';

export const About = () => {
  return (
    <Container fluid>
      <Group align="center">
        {/** TODO: Insert image */}
        <h1>About Me</h1>
        <Flex gap={5} justify="start" align="start">
          <Tabs defaultValue="about" orientation="vertical">
            <Tabs.List>
              <Tabs.Tab value="about">About Me</Tabs.Tab>
              <Tabs.Tab value="experience">Experience</Tabs.Tab>
              <Tabs.Tab value="education">Education</Tabs.Tab>
              <Tabs.Tab value="skills">Skills</Tabs.Tab>
            </Tabs.List>

            {/** TODO: Create separate components for each section */}
            <Tabs.Panel value="about">Gallery tab content</Tabs.Panel>
            <Tabs.Panel value="experience">Messages tab content</Tabs.Panel>
            <Tabs.Panel value="education">Education</Tabs.Panel>
            <Tabs.Panel value="skills">Skills</Tabs.Panel>
          </Tabs>
        </Flex>
      </Group>
    </Container>
  );
};

export default About;
