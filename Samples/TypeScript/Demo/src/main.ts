/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

import { LAppDelegate } from './lappdelegate';
//模型文件等信息的配置类
import { ResourceInfo } from './lappdefine';
import { LAppLive2DManager } from './lapplive2dmanager';


/**
 * 开始加载live2d
 * @returns void
 */
function start() {
  // create the application instance
  if (LAppDelegate.getInstance().initialize() == false) {
    return
  }

  LAppDelegate.getInstance().run();
}
 /**
  * 只是释放live2d的渲染程序，并不会直接在页面中关闭live2d
  */
function stop() {
  LAppDelegate.releaseInstance();
}
function changelive2d(index: number) {
  const live2dManager = LAppLive2DManager.getInstance();
  if (index == null) {//如果没有传入数字，则随机切换live2d模型
    live2dManager.randomScene()
  } else {
    if (index < 0) {
      live2dManager.nextScene();
    } else {
      let indexOfModel = Math.floor(index) % ResourceInfo.moduleDirNames.length
      live2dManager.changeScene(indexOfModel);
    }
  }
}

module.exports = {start,stop,ResourceInfo,changelive2d}