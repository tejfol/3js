import './styles/main.scss'

import { World } from './src/World'

function main () {
  const container = document.querySelector('#scene-container')

  const world = new World(container)

  world.render()
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded')

  try {
    const worldLoaderButton = document.getElementById('worldLoaderButton')

    worldLoaderButton.addEventListener('click', () => {
      main()

      worldLoaderButton.remove()
    })
  } catch (error) {
    console.error(error)
  }
})
