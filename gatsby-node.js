const path = require('path')
const projects = require('./src/data/ProjectItems.json')

exports.createPages = async ({ actions: { createPage } }) => {
  projects.forEach(project => {
    createPage({
      path: project.projectPath,
      component: path.resolve('./src/templates/project.js'),
      context: { project },
    })
  })
}
