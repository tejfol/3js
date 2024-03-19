import { World } from './src/World'

function main () {
  const container = document.querySelector('#scene-container')

  const world = new World(container)

  world.render()
}

const loader = document.getElementById('loader')

document.addEventListener('DOMContentLoaded', () => {
  // ? Stands for optional, if not present in the DOM -> just skip it
  loader?.remove()
  main()
  // Your code here
})
