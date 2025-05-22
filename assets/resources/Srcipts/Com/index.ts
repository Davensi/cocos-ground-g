import { __private, Asset, resources } from "cc"
import { ResourcesType } from "./comType"

export const asyncLoadDir = <T extends Asset>(path: string, type: __private._cocos_core_asset_manager_shared__AssetType<T>): Promise<T[]> => {
    return new Promise((resolve, reject) => {
        resources.loadDir(path, type, (err, assets) => {
            if (err) {
                reject(err)
            } else {
                // 先转为 unknown，再断言为目标泛型数组
                resolve(assets as unknown as T[])
            }
        })
    })
}
