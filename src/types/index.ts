export default interface ProjectDescription {
  title: string;
  subtitle: string;
  smallDescription: string;
  projectAdditionalInfo: Array<{ title: string; items: string[] }>;
  description: string;
  problem: {
    description: string;
    goals: string;
    tasks: string;
  };
  solution: string;
  research: string;
}
