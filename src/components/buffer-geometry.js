import { BufferAttribute, BufferGeometry, Mesh, MeshBasicMaterial } from 'three'

function createBufferGeometry () {
  const geometry = new BufferGeometry()

  const vertices = new Float32Array([
    -1.0, -1.0, 1.0, // v0
    1.0, -1.0, 1.0, // v1
    1.0, 1.0, 1.0, // v2

    1.0, 1.0, 1.0, // v3
    -1.0, 1.0, 1.0, // v4
    -1.0, -1.0, 1.0 // v5
  ])

  // itemSize = 3 because there are 3 values (components) per vertex
  geometry.setAttribute('position', new BufferAttribute(vertices, 3))
  const material = new MeshBasicMaterial({ color: 0xff0000 })
  const mesh = new Mesh(geometry, material)

  return mesh
}

export { createBufferGeometry }
