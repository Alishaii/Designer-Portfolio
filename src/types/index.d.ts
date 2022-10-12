export default interface ProjectDescriptionContent {
  title: string;
  subtitle: string;
  smallDescription: string;
  projectAdditionalInfo: Array<{ title: string; items: string[] }>;
  description: string;
  problem: {
    description: string;
    goals: Array<string>;
    tasks: Array<string>;
  };
  solution: string;
  research: string;
}
