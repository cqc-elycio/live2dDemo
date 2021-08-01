/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

import { LAppDelegate } from './lappdelegate';
import { resourcesConfig} from './lappdefine';
import { MocMapper} from './MocMapper'
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
async  function  start() {
  //初始化之前，需要获取到ParameterID的值，然后赋值给lappmodel

  console.log("开始获取配置文件")
  let url = './live2d/models/a/example.json'
  let mapper = MocMapper.getInstance(url)
  let arrayOfparameters = (await mapper).getJsonConfig().parameter;
  let arrayOfUrl = (await mapper).getJsonConfig().url;
  //将id值存入map中
  for (let i = 0; i < arrayOfparameters.length; i++) {
    let item = arrayOfparameters[i]
    for (let key in item) {
      (await mapper).setParameter(key,item[key])
    }
  }
  //将资源路径和url映射关系存入map中
  for (let i = 0; i < arrayOfUrl.length;i++) {
    let item = arrayOfUrl[i]
    for (let key in item) {
      (await mapper).setParameter(key,item[key])
    }
  }

   // create the application instance
   if (LAppDelegate.getInstance().initialize() == false) {
    return;
  }
  LAppDelegate.getInstance().run();
}

function stop() {
  LAppDelegate.releaseInstance();
}

module.exports = { start , stop , resourcesConfig}