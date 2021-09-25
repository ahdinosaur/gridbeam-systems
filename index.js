const GRID_BEAM_SYSTEMS = [
  {
    id: 'gridbeam.com',
    label: 'gridbeam.com',
    systemOfMeasurement: 'imperial',
    defaultSizeId: '1.5in',
    sizes: [
      {
        id: '1.5in',
        beamWidth: 1.5,
        beamWidthLabel: '1 1/2 inch',
        holes: [
          {
            id: 'wood',
            holeDiameter: 5 / 16,
            holeDiameterLabel: '5/16 inch',
            boltDiameter: 1 / 4,
            boltDiameterLabel: '1/4 inch'
          },
          {
            id: 'metal',
            holeDiameter: 13 / 32,
            holeDiameterLabel: '13/32 inch',
            boltDiameter: 3 / 8,
            boltDiameterLabel: '3/8 inch'
          }
        ]
      },
      {
        id: '2in',
        beamWidth: 2,
        beamWidthLabel: '2 inch',
        holes: [
          {
            id: 'metal',
            holeDiameter: 7 / 16,
            holeDiameterLabel: '7/16 inch',
            boltDiameter: 3 / 8,
            boltDiameterLabel: '3/8 inch'
          }
        ]
      },
      {
        id: '3in',
        beamWidth: 3,
        beamWidthLabel: '3 inch',
        holes: [
          {
            id: 'metal',
            holeDiameter: 3 / 4,
            holeDiameterLabel: '3/4 inch',
            boltDiameter: 1 / 2,
            boltDiameterLabel: '1/2 inch'
          }
        ]
      }
    ],
    defaultMaterialId: 'wood',
    materials: [
      {
        id: 'wood',
        label: 'wood',
        sizeIds: ['1.5in'],
        holeId: 'wood'
      },
      {
        id: 'aluminum',
        label: 'aluminum',
        sizeIds: ['1.5in', '2in', '3in'],
        holeId: 'metal'
      },
      {
        id: 'steel',
        label: 'steel',
        sizeIds: ['2in'],
        holeId: 'metal'
      }
    ]
  },
  {
    id: 'how-to-build-with-grid-beam-book',
    label: '"How To Build With Grid Beam" book',
    systemOfMeasurement: 'imperial',
    defaultSizeId: '1.5in',
    sizes: [
      {
        id: '0.75in',
        beamWidth: 0.75,
        beamWidthLabel: '3/4 inch',
        holes: [
          {
            id: 'metal',
            holeDiameter: 9 / 32,
            holeDiameterLabel: '9/32 inch',
            boltDiameter: 1 / 4,
            boltDiameterLabel: '1/4 inch'
          }
        ]
      },
      {
        id: '1in',
        beamWidth: 1,
        beamWidthLabel: '1 inch',
        holes: [
          {
            id: 'metal',
            holeDiameter: 11 / 32,
            holeDiameterLabel: '11/32 inch',
            boltDiameter: 5 / 16,
            boltDiameterLabel: '5/16 inch'
          }
        ]
      },
      {
        id: '1.5in',
        beamWidth: 1.5,
        beamWidthLabel: '1 1/2 inch',
        holes: [
          {
            id: 'wood',
            holeDiameter: 5 / 16,
            holeDiameterLabel: '5/16 inch',
            boltDiameter: 1 / 4,
            boltDiameterLabel: '1/4 inch'
          },
          {
            id: 'metal',
            holeDiameter: 21 / 64,
            holeDiameterLabel: '21/64 inch',
            boltDiameter: 5 / 16,
            boltDiameterLabel: '5/16 inch'
          }
        ]
      },
      {
        id: '2in',
        beamWidth: 2,
        beamWidthLabel: '2 inch',
        holes: [
          {
            id: 'metal',
            holeDiameter: 7 / 16,
            holeDiameterLabel: '7/16 inch',
            boltDiameter: 3 / 8,
            boltDiameterLabel: '3/8 inch'
          }
        ]
      }
    ],
    defaultMaterialId: 'wood',
    materials: [
      {
        id: 'wood',
        label: 'wood',
        sizeIds: ['1.5in'],
        holeId: 'wood'
      },
      {
        id: 'metal',
        label: 'metal',
        sizeIds: ['0.75in', '1in', '1.5in', '2in'],
        holeId: 'metal'
      }
    ]
  },
  {
    id: 'gridkit.nz',
    label: 'gridkit.nz',
    systemOfMeasurement: 'metric',
    defaultSizeId: '40mm',
    sizes: [
      {
        id: '40mm',
        beamWidth: 40,
        beamWidthLabel: '40 mm',
        holes: [
          {
            id: 'wood',
            holeDiameter: 8,
            holeDiameterLabel: '8 mm',
            boltDiameter: 6,
            boltDiameterLabel: '6 mm'
          }
        ]
      },
    ],
    defaultMaterialId: 'wood',
    materials: [
      {
        id: 'wood',
        label: 'wood',
        sizeIds: ['40mm'],
        holeId: 'wood'
      },
    ]
  }
]

module.exports = GRID_BEAM_SYSTEMS
