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
import { AboutMe } from '@/components/About/AboutMe/AboutMe';
import { Experience } from '@/components/About/Experience/Experience';
import { Education } from '@/components/About/Education/Education';
import ProfilePic from '../../assets/images/Profile.jpg';

// TODO: Need to fix styling for the tabs to be more responsive
export const AboutPage = () => {
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

export default AboutPage;
