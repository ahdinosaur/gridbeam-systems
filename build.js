const { join } = require('path')
const { readFileSync, writeFileSync } = require('fs')

const systems = require('./')

const readmePath = join(__dirname, 'README.md')
var readmeContents = readFileSync(readmePath, 'utf8')
readmeContents = readmeContents.replace(
  /\n<!-- REPLACE_START -->[^]*<!-- REPLACE_END -->/,
  `
<!-- REPLACE_START -->

## systems
${systems
    .map(system => {
      const {
        id: systemId,
        label: systemLabel,
        systemOfMeasurement,
        sizes,
        defaultSizeId,
        materials,
        defaultMaterialId
      } = system

      const defaultSize = sizes.find(size => size.id === defaultSizeId)
      const defaultMaterial = materials.find(
        material => material.id === defaultMaterialId
      )

      return `
### ${systemId}

- name: ${systemLabel}
- system of measurement: ${systemOfMeasurement}
- default beam width: ${defaultSize.beamWidthLabel}
- default material: ${defaultMaterial.label}

| beam width | materials | hole diameter | bolt diameter |
|---|---|---|---|
${sizes
    .map(size => {
      const { id: sizeId, beamWidthLabel, holes } = size

      const sizeMaterials = materials.filter(material => {
        return material.sizeIds.includes(sizeId)
      })

      return `${holes
        .map(hole => {
          const { id: holeId, holeDiameterLabel, boltDiameterLabel } = hole
          const holeMaterials = sizeMaterials.filter(material => {
            return material.holeId === holeId
          })
          const materialLabels = holeMaterials
            .map(material => material.label)
            .join(', ')
          return `| ${beamWidthLabel} | ${materialLabels} | ${holeDiameterLabel} | ${boltDiameterLabel} |
`
        })
        .join('')}`
    })
    .join('')}`
    })
    .join('')}

<!-- REPLACE_END -->`
)
writeFileSync(readmePath, readmeContents, 'utf8')
