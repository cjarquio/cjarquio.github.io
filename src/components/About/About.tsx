import { Container, Flex, Group, Tabs, Image } from '@mantine/core';
import { AboutMe } from './AboutMe/AboutMe';
import ProfilePic from '../../shared/images/Profile.jpg';
import { Experience } from './Experience/Experience';

export const About = () => {
  return (
    <Container fluid>
      <Group grow preventGrowOverflow={false} wrap="nowrap">
        <Container>
          <Image
            src={ProfilePic}
            alt="Me"
            fit="contain"
            height={'100%'}
            width={'auto'}
            radius="md"
          />
        </Container>
        <Flex gap={5} justify="start" align="start">
          <Tabs defaultValue="about" orientation="vertical">
            <Tabs.List>
              <Tabs.Tab value="about">About Me</Tabs.Tab>
              <Tabs.Tab value="experience">Experience</Tabs.Tab>
              <Tabs.Tab value="education">Education</Tabs.Tab>
              <Tabs.Tab value="skills">Skills</Tabs.Tab>
            </Tabs.List>

            {/** TODO: Create separate components for each section */}
            <Tabs.Panel value="about">
              <AboutMe />
            </Tabs.Panel>
            <Tabs.Panel value="experience">
              <Experience />
            </Tabs.Panel>
            <Tabs.Panel value="education">Education</Tabs.Panel>
            <Tabs.Panel value="skills">Skills</Tabs.Panel>
          </Tabs>
        </Flex>
      </Group>
    </Container>
  );
};

export default About;
