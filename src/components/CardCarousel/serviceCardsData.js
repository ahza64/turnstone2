import { v4 as uuidv4 } from "uuid";
import {
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiMocha,
  SiGithub,
  SiRaspberrypi,
  SiReact
} from "react-icons/si"

const ipsome1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend neque venenatis mi scelerisque, vitae iaculis."
const ipsome2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur est diam, eu malesuada arcu laoreet at. Morbi porta, quam convallis."
const ipsome3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet iaculis magna. Etiam dolor nulla, dictum quis."

const serviceCardsData = [
  {
    id: uuidv4(),
    title: "Frontend",
    description: "frontend description",
    services: [
      {
        id: uuidv4(),
        title: "HTML",
        description: "The building blocks of the internet. I originally learned about HTML thruogh an online tutorial on Udacity.",
        icon: <SiHtml5/>
      },
      {
        id: uuidv4(),
        title: "CSS",
        description: "I really like to play with transitions and interesting color schemes that pop. Be sure to flip the theme.",
        icon: <SiCss3/>
      },
      {
        id: uuidv4(),
        title: "JavaScript",
        description: "Ah, good ol' JavaScript, 'the most popluar language in the world'... No one ever said it was easy though.",
        icon: <SiJavascript/>
      }
    ]
  },
  {
    id: uuidv4(),
    title: "Backend",
    description: "backend description",
    services: [
      {
        id: uuidv4(),
        title: "Node.js",
        description: "Node? do you just mean serverside javascript? Ok sure. I mean fetch() has even been recently added.",
        icon: <SiNodedotjs/>
      },
      {
        id: uuidv4(),
        title: "Postgresql",
        description: "tables tables tables tables tables tables tables tables",
        icon: <SiPostgresql/>
      },
      {
        id: uuidv4(),
        title: "Mongodb",
        description: "Me likey MongoDB. I even have some professional experience adapting the infamous 'asset pipeline'... hella meta dude",
        icon: <SiMongodb/>
      }
    ]
  },
  {
    id: uuidv4(),
    title: "Hobbies",
    description: "hobby description",
    services: [
      {
        id: uuidv4(),
        title: "IoT",
        description: "Who doesn't want a robot house, and a robot garden, and a robot slave you control with your phone.",
        icon: <SiRaspberrypi/>
      },
      {
        id: uuidv4(),
        title: "Automation",
        description: "Lots of real world experience. Industrial generators are all fully automated with several built in redundancies.",
        icon: <SiGithub/>
      },
      {
        id: uuidv4(),
        title: "Robotics",
        description: "Self driving cars can and will be safer than humans. Precision robotics is letting humanity reach unreachable places.",
        icon: <SiReact/>
      }
    ]
  }
]

export default serviceCardsData
