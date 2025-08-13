import { IconAt, IconMapPin, IconPhone, IconSun } from '@tabler/icons-react';
import { Box, Stack, Text } from '@mantine/core';

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

export const ContactIcon = ({
  icon: Icon,
  title,
  description,
  ...others
}: ContactIconProps) => {
  return (
    <div className={'flex items-center'} {...others}>
      <Box mr="md">
        <Icon size={24} />
      </Box>

      <div>
        <Text size="xs" className={'mr-md'}>
          {title}
        </Text>
        <Text>{description}</Text>
      </div>
    </div>
  );
};

const contactInformation = [
  { title: 'Email', description: 'cjarquio@gmail.com', icon: IconAt },
  { title: 'Phone', description: '+1 (808) 346 - 6221', icon: IconPhone },
  { title: 'Location', description: 'Federal Way, WA', icon: IconMapPin },
];

export function ContactIconsList() {
  const items = contactInformation.map((item, index) => (
    <ContactIcon key={index} {...item} />
  ));
  return <Stack>{items}</Stack>;
}
