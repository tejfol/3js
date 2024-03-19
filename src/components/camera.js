import { PerspectiveCamera } from 'three'

function createCamera () {
  const FOV = 45 // Field Of View
  const ASPECT = 1 // window.innerWidth / window.innerHeight // Aspect Ratio
  const NEAR = 0.1 // Near clipping plane
  const FAR = 100 // Far clipping plane

  const camera = new PerspectiveCamera(
    FOV,
    ASPECT,
    NEAR,
    FAR
  )

  // move the camera back(z axis) so we can view the scene
  camera.position.set(0, 0, 5)

  return camera
}

export { createCamera }
