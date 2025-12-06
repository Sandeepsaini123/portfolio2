import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import Love from "../../assets/images/love1.png"; 
import NewsMag from "../../assets/images/newsmag1.png"; 
import Barber from "../../assets/images/barber1.png"; 
import SainiRestaurant from "../../assets/images/sainirestaurant1.png"
import AcsTech from "../../assets/images/acstech1.png"

const projects = [
  {
    name: "Acstechconsulting Website",
    align: "right",
    image: AcsTech,  
    link: "https://www.acstechconsulting.com/",
  },
  {
    name: "Saini Restaurant",
    align: "left",
    image: SainiRestaurant,  
    link: "https://saini-restaurant.netlify.app/",
  },
  {
    name: "Barber Shop Website",
    align: "right",
    image: Barber, 
    link: "https://star-brick.vercel.app/",
  },
   {
    name: "NewsMag Website",
    align: "left",
    image: NewsMag, 
    link: "https://news-mag-d54a.onrender.com/",
  },
  {
    name: "Love Proposal",
    align: "right",
    image: Love,  
    link: "https://fit-nexus-seven.vercel.app/",
  },
 
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            align={project.align}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;