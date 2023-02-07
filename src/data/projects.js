// This is whats called a named export
// This allows you to export multiple JS objects

// With named exports we are essentially export a object
// containing all the named exports

// export default {
//   projects
// }

/**
 * It is complex!
 * read here https://nodejs.org/api/esm.html
 */

export const projects = [
  {id: 0, name: "Project 0", shortDescription: "Project details here"},
  {id: 1, name: "Project 1", shortDescription: "Project details here"},
  {id: 2, name: "Project 2", shortDescription: "Project details here"},
  {id: 3, name: "Project 3", shortDescription: "Project details here"},
  {id: 4, name: "Project 4", shortDescription: "Project details here"},
  {id: 5, name: "Project 5", shortDescription: "Project details here"},
]


// Default exports can be renamed when importing