/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

import { LAppDelegate } from './lappdelegate';
import { resourcesConfig} from './lappdefine';
import { LAppLive2DManager } from './lapplive2dmanager'
import { Banner } from './banners';
//const Live2DCubismCore = require("../../../../Core/live2dcubismcore")
function printVersion() {
  console.log("欢迎使用 MeiDou 前端看板娘")
  console.log("项目开源地址：https://github.com/cqc233/live2dDemo")
  console.log("如果觉得项目对你有用，可以请开发者喝瓶快乐水：https://www.ashesone.top/upload/2021/09/%E6%94%B6%E6%AC%BE%E7%A0%81-cd69a558456143419b585acb2a405a6e.jpg")
  //Banner.printBanner();
}

function  start() {
  printVersion()
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
module.exports = { start , stop , changeScene , resourcesConfig }
