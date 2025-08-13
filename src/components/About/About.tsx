import {
  Container,
  Flex,
  Group,
  Tabs,
  TabsList,
  TabsTab,
  TabsPanel,
  Image,
} from '@mantine/core';
import NextImage from 'next/image';
import { AboutMe } from './AboutMe/AboutMe';
import ProfilePic from '../../assets/images/Profile.jpg';
import { Experience } from './Experience/Experience';
import { Education } from './Education/Education';

export const About = () => {
  return (
    <Container fluid>
      <Group grow preventGrowOverflow={false} wrap="nowrap">
        <Container>
          <Image
            src={ProfilePic}
            component={NextImage}
            className="h-full w-auto"
            alt="Me"
            fit="contain"
            radius="md"
          />
        </Container>
        <Flex gap={5} justify="start" align="start">
          <Tabs defaultValue="about" orientation="vertical">
            <TabsList>
              <TabsTab value="about">About Me</TabsTab>
              <TabsTab value="experience">Experience</TabsTab>
              <TabsTab value="education">Education</TabsTab>
              <TabsTab value="skills">Skills</TabsTab>
            </TabsList>

            {/** TODO: Create separate components for each section */}
            <TabsPanel value="about">
              <AboutMe />
            </TabsPanel>
            <TabsPanel value="experience">
              <Experience />
            </TabsPanel>
            <TabsPanel value="education">
              <Education />
            </TabsPanel>
            <TabsPanel value="skills">Skills</TabsPanel>
          </Tabs>
        </Flex>
      </Group>
    </Container>
  );
};

export default About;
