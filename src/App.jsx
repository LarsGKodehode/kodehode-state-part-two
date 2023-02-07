import { useState } from "react"

import ProjectList from "./components/ProjectList/ProjectList"
import SearchField from "./components/SearchField/SearchField"

// This is how we are importing named exports
import { projects } from './data/projects'

function App() {
  const [searchParameter, setSearchParameter] = useState("")

  function updateSearchParameter(event) {
    setSearchParameter(event.target.value)
  }

  return (
    <div className="App">

      <SearchField searchParameter={searchParameter} updateSearchParameter={updateSearchParameter} />
      <ProjectList projects={projects} searchParameter={searchParameter} />

    </div>
  )
}

export default App
