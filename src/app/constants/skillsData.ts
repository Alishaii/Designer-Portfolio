interface Example {
  id: number;
  name: string;
  primary: boolean;
}

export const programsExamples: Example[] = [
  {
    id: 0,
    name: "Figma",
    primary: true,
  },
  {
    id: 1,
    name: "Photoshop",
    primary: false,
  },
  {
    id: 2,
    name: "Illustrator",
    primary: false,
  },
  {
    id: 3,
    name: "InDesign",
    primary: false,
  },
  {
    id: 4,
    name: "Tilda",
    primary: false,
  },
];

export const programsText: string =
  "All of these programs are useful in their own way. But of course figma forever in my heart.";

export const personalQualitiesExamples: Example[] = [
  {
    id: 0,
    name: "Creativity",
    primary: false,
  },
  {
    id: 1,
    name: "Hard working",
    primary: false,
  },
  {
    id: 2,
    name: "Curious",
    primary: false,
  },
];

export const personalQualitiesText: string =
  "In my work, I try to help the customer achieve results. The site must work and be useful.";

export const interestsExamples: Example[] = [
  {
    id: 0,
    name: "Sport",
    primary: false,
  },
  {
    id: 1,
    name: "Reading",
    primary: false,
  },
  {
    id: 2,
    name: "Drawing",
    primary: false,
  },
];

export const interestsText: string =
  "I have many interests, each of them reveals something new to me, so I am always ready for changes.";
