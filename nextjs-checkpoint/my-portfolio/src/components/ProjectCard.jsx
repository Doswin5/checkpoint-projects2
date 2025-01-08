const ProjectCard = ({ title, description, image }) => (
  <div>
    <Image src={image} alt={title} width={300} height={200} />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default ProjectCard;
