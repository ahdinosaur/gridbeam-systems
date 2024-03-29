# gridbeam-systems

modular GridBeam systems

```shell
npm install --save gridbeam-systems
```

## usage

```javascript
const systems = require('gridbeam-systems')
```

<!-- REPLACE_START -->

## systems

### gridbeam.com

- name: gridbeam.com
- system of measurement: imperial
- default beam width: 1 1/2 inch
- default material: wood

| beam width | materials | hole diameter | bolt diameter |
|---|---|---|---|
| 1 1/2 inch | wood | 5/16 inch | 1/4 inch |
| 1 1/2 inch | aluminum | 13/32 inch | 3/8 inch |
| 2 inch | aluminum, steel | 7/16 inch | 3/8 inch |
| 3 inch | aluminum | 3/4 inch | 1/2 inch |

### how-to-build-with-grid-beam-book

- name: "How To Build With Grid Beam" book
- system of measurement: imperial
- default beam width: 1 1/2 inch
- default material: wood

| beam width | materials | hole diameter | bolt diameter |
|---|---|---|---|
| 3/4 inch | metal | 9/32 inch | 1/4 inch |
| 1 inch | metal | 11/32 inch | 5/16 inch |
| 1 1/2 inch | wood | 5/16 inch | 1/4 inch |
| 1 1/2 inch | metal | 21/64 inch | 5/16 inch |
| 2 inch | metal | 7/16 inch | 3/8 inch |

### gridkit.nz

- name: gridkit.nz
- system of measurement: metric
- default beam width: 40 mm
- default material: wood

| beam width | materials | hole diameter | bolt diameter |
|---|---|---|---|
| 40 mm | wood | 8 mm | 6 mm |


<!-- REPLACE_END -->

## data schema

```typescript
interface System {
  id: string
  label: string
  systemOfMeasurement: 'imperial' | 'metric'
  defaultSizeId: string
  sizes: Array<Size>
  defaultMaterialId: string
  materials: Array<Material>
}

interface Size {
  id: string
  beamWidth: number
  beamWidthLabel: string
  holes: Array<Hole>
}

interface Hole {
  id: string
  holeDiameter: number
  holeDiameterLabel: string
  boltDiameter: number
  boltDiameterLabel: string
}

interface Material {
  id: string
  label: string
  sizeIds: Array<string>
  holeId: string
}
```

## license

The Apache License

Copyright &copy; 2019 Michael Williams

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
