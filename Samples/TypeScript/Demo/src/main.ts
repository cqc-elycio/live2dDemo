/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

import { LAppDelegate } from './lappdelegate';
import { resourcesConfig} from './lappdefine';
import { LAppLive2DManager} from './lapplive2dmanager'
/**
 * ブラウザロード後の処理
 */


/**
 * 終了時の処理
 */

/**
 * 
 * @returns 下一步解决判定点与模型中心的不一致的问题（牵扯到图形学的内容，没接触过，可能需要另辟蹊径）

*/


/**
 * Process when changing screen size.
 
window.onresize = () => {
  if (LAppDefine.CanvasSize === 'auto') {
    LAppDelegate.getInstance().onResize();
  }
};
*/
function  start() {

   // create the application instance
   if (LAppDelegate.getInstance().initialize() == false) {
    return;
  }
  LAppDelegate.getInstance().run();
}

function stop() {
  LAppDelegate.releaseInstance();
}
/**
 * 根据index来控制切换模型，只能填整数
 * @param index 模型的次序
 * 从1开始。 小于0：随机加载
 * >0加载数组下标为index-1的模型
 * ==0 加载下一个模型
 */
function changeScene(index: number) {
  let manager = LAppLive2DManager.getInstance();
  if (index < 0) {
    manager.randomScene();
  } else if (index > 0 ) {
    manager.changeScene(index-1)
  } else if (index ==0) {
    manager.nextScene();
  }

}
module.exports = { start , stop , changeScene , resourcesConfig}