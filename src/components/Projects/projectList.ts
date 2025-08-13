export interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export const projects: ProjectProps[] = [
  {
    title: 'Project 1',
    description: 'This is the first project.',
    imageUrl:
      'https://nstxl.org/wp-content/uploads/2023/08/Success-Story-KANAGWA-1.png',
    link: 'https://example.com/project1',
  },
  {
    title: 'Project 2',
    description: 'This is the second project.',
    imageUrl:
      'https://nstxl.org/wp-content/uploads/2023/08/Success-Story-KANAGWA-1.png',
    link: 'https://example.com/project2',
  },
  {
    title: 'Project 3',
    description: 'This is the third project.',
    imageUrl:
      'https://nstxl.org/wp-content/uploads/2023/08/Success-Story-KANAGWA-1.png',
    link: 'https://example.com/project2',
  },
  {
    title: 'Project 4',
    description: 'This is the fourth project.',
    imageUrl:
      'https://nstxl.org/wp-content/uploads/2023/08/Success-Story-KANAGWA-1.png',
    link: 'https://example.com/project2',
  },
  // Add more projects as needed
];
