import ProjectDescriptionContent from '../../types';

export const minimal: ProjectDescriptionContent = {
  title: 'MINIMAL',
  subtitle: 'Landing Page',
  smallDescription: 'Website for the presentation and sale \n of products with own production',
  projectAdditionalInfo: [
    { title: 'My role', items: ['Product Designer'] },
    { title: 'Duration', items: ['may 2021-july 2021'] },
    { title: 'Programs', items: ['Figma', 'Photoshop'] },
    { title: 'Contribution', items: ['UX Researcher', 'UI/UX Designer'] }
  ],
  description:
    'The Minimal company has qualified teams of employees, great business connections, and they needed a website to communicate with customers and provide them with services in the form of selling ready-made apartments.',
  problem: {
    description:
      'The task was set to solve business problems, which consist in the sale of already built apartments in an expensive residential complex.',
    goals: '– Achieve sales of the majority of apartments in a residential complex within six months.',
    tasks: '– Create a website based on the target audience'
  },
  solution:
    'It is necessary to provide an overview of brief information and high-quality photos, the main characteristics and the ability to select different options on the site.',
  research:
    'In the course of my research, the target audience of this product was determined. I was also able to make a list in which all the necessary data from the point of view of the consumer himself, which will need to be placed on the site, were written out.'
};
