### Model definition

## Units
Before diving into specific entities, its useful to understand how we represent physical distance in our `<model>`.
In all `models` we create, the basic unit of distance is 1/16th of an inch. We represent this distance as an integer.
In other words, `x=16` represents `1 inch`, `x=256` represents `16 inches`.

## `<model>`
This is the top level entity that encloses all other entities in the representation.

## `<corner>`
This is the entity that represents a particular position in the model located at (`x`, `y`) point with a unique `id`.
Corners represent endpoints of a wall, and a given corner can be shared by multiple walls.

## `<wall>`
This entity represents a wall between two `<corner>`s. A `<wall>` is the physical entity that actually gets framed on sight 
when we build homes. 

In our model, a `<wall>` entity has the following properties:
|  | Description | Example |
|-|-|-|
| `id` | Unique identifier for a `wall`, unique across a given `<model>` | ..|
| `height` | Wall height | `1744` (9 ft, 1 inch) |
| `startCorner` | Corner that is at the start of the wall | |
| `endCorner` | Corner that is at the end of the wall | |
| `material` | Lumber that is used to construct the wall | 2x6, 2x4 |
| `isExterior` | Denotes if this wall is an exterior or interior wall | `"true"` for exterior walls; `"false"` for interior walls|
| `label` | Name assigned to the wall | `"A"` |

## `<door>`
Represents a door within a wall, and has the following properties:
| | Description | Example |
|-|-|-|
| `start` | Start Location, relative to the start of the wall | |
| `end` | End Location, relative to the start of the wall | |

## `<window>`
Represents a window within a wall, and has the following properties:
| | Description | Example |
|-|-|-|
| `start` | Start Location, relative to the start of the wall | |
| `end` | End Location, relative to the start of the wall | |
| `sillHeight` | Height of the window sill from the base of the wall | |
