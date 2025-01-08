export const getStaticProps = async () => {
  const projects = [
    { title: 'Project 1', description: 'Description of Project 1', image: '/project1.jpg' },
    { title: 'Project 2', description: 'Description of Project 2', image: '/project2.jpg' },
  ];

  return {
    props: { projects },
  };
};

const Projects = ({ projects }) => (
  <div>
    <h1>My Projects</h1>
    {projects.map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))}
  </div>
);

export default Projects;
