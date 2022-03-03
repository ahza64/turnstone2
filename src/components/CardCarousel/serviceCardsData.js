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
        description: ipsome1,
        icon: <SiHtml5/>
      },
      {
        id: uuidv4(),
        title: "CSS",
        description: ipsome2,
        icon: <SiCss3/>
      },
      {
        id: uuidv4(),
        title: "JavaScript",
        description: ipsome3,
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
        description: ipsome1,
        icon: <SiNodedotjs/>
      },
      {
        id: uuidv4(),
        title: "Postgresql",
        description: ipsome2,
        icon: <SiPostgresql/>
      },
      {
        id: uuidv4(),
        title: "Mongodb",
        description: ipsome3,
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
        description: ipsome1,
        icon: <SiRaspberrypi/>
      },
      {
        id: uuidv4(),
        title: "Automation",
        description: ipsome2,
        icon: <SiGithub/>
      },
      {
        id: uuidv4(),
        title: "Robotics/Automotive",
        description: ipsome3,
        icon: <SiReact/>
      }
    ]
  }
]

export default serviceCardsData
