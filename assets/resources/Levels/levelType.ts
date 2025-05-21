import { TILE_TYPE_ENUM } from '../Eunms'

export interface ITile {
  src:number | null
  type:TILE_TYPE_ENUM | null
}

export interface ILevel {
  mapInfo:Array<Array<ITile>>
}
