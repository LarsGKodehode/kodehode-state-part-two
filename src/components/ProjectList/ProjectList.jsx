import styles from './styles.module.css'

function ProjectCard(props) {
  const {project} = props

  return (
    <div>
      <h3>{project.name}</h3>
      <p>{project.shortDescription}</p>
    </div>
  )
}

function ProjectList(props) {
  const {projects, searchParameter} = props

  // Filtering the list if searchParamenter is thruthy
  // else just use the unfiltered list
  const filteredProjects = searchParameter
  ? projects.filter(
      (project) => project.name === searchParameter
    )
  : projects

  return (
    <div className={styles.container} >

      {
        filteredProjects.map(
          (project) => <ProjectCard key={project.id} project={project} />
        )
      }

    </div>
  )
}

export default ProjectList