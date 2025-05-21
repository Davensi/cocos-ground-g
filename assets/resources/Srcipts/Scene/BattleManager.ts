
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('BattleManager')
export class BattleManager extends Component {

    async start () {
        await  this.createRileMap()
    }
    async createRileMap(){
        const stage = new Node

        const tileMap = new Node()
    }
}

