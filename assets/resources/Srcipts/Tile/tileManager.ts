
import { _decorator, Component, Layers, Node, Sprite, SpriteFrame, UITransform, Label, Color } from 'cc' // 添加Label导入
import levels from '../../Levels'
import { asyncLoadDir } from '../Com'
const { ccclass, property } = _decorator
export const TILE_WIDTH = 55
export const TILE_HEIGHT = 55

@ccclass('TileManager')
export class TileManager extends Component {
    async init(){
      const { mapInfo } = levels['level1']
      const spriteFrames = await asyncLoadDir('texture/tile/tile', SpriteFrame)
      for(const cols of mapInfo){
        for(const row of cols){
          if(row.type === null || row.src === null){
            continue
          }
          // 创建两个独立节点：一个用于显示图片，一个用于显示文字
          const tileNode = new Node()
          const labelNode = new Node()

          // 在图片节点上添加Sprite组件
          const sprite = tileNode.addComponent(Sprite)
          const path = `tile (${row.src})`
          const frame = spriteFrames.find(item => item.name === path)
          if (frame) {
            sprite.spriteFrame = frame
          }

          // 在文字节点上添加Label组件
          const label = labelNode.addComponent(Label)
          label.string = `Tile:${row.src}`
          label.fontSize = 20
          label.color = Color.RED

          // 设置两个节点的Transform
          const tileTransform = tileNode.addComponent(UITransform)
          tileTransform.setContentSize(TILE_WIDTH,TILE_HEIGHT)
          const labelTransform = labelNode.addComponent(UITransform)

          // 设置层级
          tileNode.layer = 1 << Layers.nameToLayer('UI2D')
          labelNode.layer = 1 << Layers.nameToLayer('UI2D')

          // 将文字节点作为图片节点的子节点
          labelNode.setParent(tileNode)
          tileNode.setParent(this.node)
        }
      }
    }
}



