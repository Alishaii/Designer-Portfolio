import hoobImg from '../../../public/images/MainPage/projects/hoob.png';
import minimalImg from '../../../public/images/MainPage/projects/minimal.png';
import dengeImg from '../../../public/images/MainPage/projects/denge.png';
import secrImg from '../../../public/images/MainPage/projects/secr.png';

export const projects = [
  {
    name: 'Hoob hokans',
    description:
      'Redesign of the site for the sale of unique hookahs of the Hoob brand of its own production, in order to increase sales.',
    img: hoobImg,
    imgWidth: 654,
    imgHeight: 474,
    href: '/projects/hoob',
    buttonText: 'see more'
  },
  {
    name: 'Minimal',
    description:
      'Creation of a website for a real estate company minimal with the aim of selling expensive apartments, as well as with the ability to select and view the necessary apartments.',
    img: minimalImg,
    imgWidth: 653,
    imgHeight: 578,
    href: '/projects/minimal',
    buttonText: 'see more'
  },
  {
    name: 'Denge',
    description:
      'The project was created for educational purposes, under the direction of the design studio UPROCK. The task was to create a relevant website for a large real estate company.',
    img: dengeImg,
    imgWidth: 721,
    imgHeight: 443,
    href: '/projects/denge',
    buttonText: 'comming soon'
  },
  {
    name: 'SECR',
    description:
      'An information site for the general development of youth and a knowledge resource for students. Can help improve your knowledge in the field.',
    img: secrImg,
    imgWidth: 653,
    imgHeight: 490,
    href: '/projects/secr',
    buttonText: 'see more'
  }
];
