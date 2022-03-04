import { v4 as uuidv4 } from 'uuid';

const serviceCardsData = [
  {
    id: uuidv4(),
    title: "frontend",
    description: "frontend description",
    services: [
      {
        id: uuidv4(),
        title: "html",
        description: "html description"
      },
      {
        id: uuidv4(),
        title: "css",
        description: "css description",
      },
      {
        id: uuidv4(),
        title: "javascript",
        description: "javascript description",
      }
    ]
  },
  {
    id: uuidv4(),
    title: "backend",
    description: "backend description",
    services: [
      {
        id: uuidv4(),
        title: "node",
        description: "node description"
      },
      {
        id: uuidv4(),
        title: "postgress",
        description: "postgress description",
      },
      {
        id: uuidv4(),
        title: "mongodb",
        description: "mongodb description",
      }
    ]
  },
  {
    id: uuidv4(),
    title: "hobbies",
    description: "hobby description",
    services: [
      {
        id: uuidv4(),
        title: "IoT",
        description: "IoT description"
      },
      {
        id: uuidv4(),
        title: "Automation",
        description: "Automation description",
      },
      {
        id: uuidv4(),
        title: "Robotics/Automotive",
        description: "Robotics/Automotive description",
      }
    ]
  }
]

export default serviceCardsData
