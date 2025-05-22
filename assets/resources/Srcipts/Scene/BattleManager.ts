
import { _decorator, Component, Node } from 'cc';
import { TileManager } from '../Tile/tileManager';
const { ccclass, property } = _decorator;


@ccclass('BattleManager')
export class BattleManager extends Component {

    async start () {
        await  this.createRileMap()
    }
    async createRileMap(){

        // 创建舞台便于瓦片地图挂载
        const stage = new Node()
        stage.setParent(this.node)

        // 创建瓦片地图
        const tileMap = new Node()
        tileMap.setParent(stage)
       const tileManager  = tileMap.addComponent(TileManager)
       tileManager.init()
    }
}

