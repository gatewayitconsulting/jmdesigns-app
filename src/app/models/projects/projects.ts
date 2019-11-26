import { Project } from '../../services/projects/project';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Simplest Cookbook',
    image: 'assets/img/projects/simplestCookbook.jpg',
    websiteLink: 'https://www.simplestcookbook.com/',
    codeLink: 'https://github.com/gatewayitconsulting/simplest-cookbook-react',
    description: 'Cookbook app with many different recipes and features to assist people cooking.'
  },
  {
    id: 2,
    name: 'Gateway IT Consulting',
    image: 'assets/img/projects/gitc.jpg',
    websiteLink: 'https://www.gatewayitconsulting.com/',
    codeLink: '',
    description: 'A website to help clients and users find solutions for designing, building, and maintaining websites.'
  },
  {
    id: 3,
    name: 'The Palate STL',
    image: 'assets/img/projects/thePalateSTL.jpg',
    websiteLink: 'https://www.thepalatestl.com/',
    codeLink: '',
    description: 'A local restaurant finder app for the St. Louis area.'
  },
  {
    id: 4,
    name: "Our Lady's Inn",
    image: 'assets/img/projects/ourLadysInn.jpg',
    websiteLink: 'https://ourladysinn.org/',
    codeLink: '',
    description: "Website for Our Lady's Inn maternity homes in St. Louis."
  }
];