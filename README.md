# live2d网页版看板娘

## 更新记录

#### 2021年8月16日

- 新增自定义模型放大倍率功能，需要在mapper.json文件中增加model_scale属性
- 修改源码中的单词拼写错误

##### 之前



1.  重新规范了项目跟踪的文件，项目同步更新到官方最新版WebSDK
2. 将模型中重要的参数改为可配置项，使用时需要配置相关方法和配置文件


## 使用方法（默认你会安装前端项目）
  点开main.ts文件，里面有注释，使用文件里面暴露的接口进行自定义设置
设置完成后，在前端界面调用live2dLoader.start()启动
剩下的参照index.html配置即可
如果你的模型不会随鼠标动，请参考 Samples\TypeScript\Demo\live2d\models\a\example.json对id参数进行配置

## 注意事项
项目处于开发阶段，正在进行调试


## 开发环境

### Node.js

* 16.1.0
* 14.17.0
* 12.22.1


## 浏览器支持列表

| 平台 | 浏览器 | 版本号 |
| --- | --- | --- |
| Android | Google Chrome | 90.0.4430.210 |
| Android | Microsoft Edge | 46.04.4.5157 |
| Android | Mozilla Firefox | 88.1.4 |
| iOS / iPadOS | Google Chrome | 90.0.4430.216 |
| iOS / iPadOS | Microsoft Edge | 46.3.13 |
| iOS / iPadOS | Mozilla Firefox | 33.1 |
| iOS / iPadOS | Safari | 14.1 |
| macOS | Google Chrome | 91.0.4472.77 |
| macOS | Microsoft Edge | 90.0.818.66 |
| macOS | Mozilla Firefox | 88.0.1 |
| macOS | Safari | 14.1 |
| Windows | Google Chrome | 91.0.4472.77 |
| Windows | Internet Explorer 11 | 19041.928 |
| Windows | Microsoft Edge | 90.0.818.66 |
| Windows | Mozilla Firefox | 88.0.1 |

Note: 由于我没有研究官方对核心库的授权方式，故没有加上开源协议，我把官方的LICENSE拷贝过来了
