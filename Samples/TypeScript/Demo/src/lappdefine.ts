/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

import { LogLevel } from '@framework/live2dcubismframework';

/**
 * Sample Appで使用する定数
 */

// Canvas width and height pixel values, or dynamic screen size ('auto').
export const CanvasSize: { width: number; height: number } | 'auto' = 'auto';

// 画面
export const ViewScale = 2;
export const ViewMaxScale = 4.0;
export const ViewMinScale = 0.4;

export const ViewLogicalLeft = -1.0;
export const ViewLogicalRight = 1.0;
export const ViewLogicalBottom = -1.0;
export const ViewLogicalTop = 1.0;

export const ViewLogicalMaxLeft = -2.0;
export const ViewLogicalMaxRight = 2.0;
export const ViewLogicalMaxBottom = -2.0;
export const ViewLogicalMaxTop = 2.0;

class ResourceConfig {
    //模型资源路径
    public resourcesPath: string;
    //在模型目录中想要现实的模型文件夹名字
    public modelNames: string[];
    public modelSize: number;
    //显示live2d模型的canvas的id
    public canvasId: string = 'live2d';
    public x_scale: number = 2;
    public y_scale: number = 1;
    //模型的缩放比例
    public model_scale: number = 1;
    constructor() {
        this.resourcesPath = '../../Resources/';
        this.modelNames = ['Haru', 'Hiyori', 'Mark', 'Natori', 'Rice'];
        this.modelSize = this.modelNames.length;
    }

    public setResourcesPath(path:string) {
         this.resourcesPath = path;
    }
    public setCanvasId(canvasId:string) {
        this.canvasId = canvasId;
   }

  
    public setModelScale(scale: number) {
        this.model_scale = scale;
    }

    public getModelScale() {
        return this.model_scale
    }
    
    
    public setModelNames(models:string[]) {
        this.modelNames = models;
        this.setModelSize();
    }

    public setModelSize() {
        this.modelSize = this.modelNames.length;
    }

    public getResourcesPath() {
        return this.resourcesPath;
    }

    public getModelNames() {
        return this.modelNames;
    }

    public getModelSize() { return this.modelSize;}
    public getCanvasId() {
       return  this.canvasId
    }
    
    public setXscale(scale:number) {  this.x_scale = scale }
    public setYscale(scale:number) {  this.y_scale = scale }
    public getXscale() { return this.x_scale }
    public getYscale() { return this.y_scale}

}

export const resourcesConfig = new ResourceConfig();

// 相対パス
//export const ResourcesPath = '../../Resources/';

// モデルの後ろにある背景の画像ファイル
export const BackImageName = '';

// 歯車
export const GearImageName = '';

// 終了ボタン
export const PowerImageName = '';

// 外部定義ファイル（json）と合わせる
export const MotionGroupIdle = 'Idle'; // アイドリング
export const MotionGroupTapBody = 'TapBody'; // 体をタップしたとき

// 外部定義ファイル（json）と合わせる
export const HitAreaNameHead = 'Head';
export const HitAreaNameBody = 'Body';

// モーションの優先度定数
export const PriorityNone = 0;
export const PriorityIdle = 1;
export const PriorityNormal = 2;
export const PriorityForce = 3;

// デバッグ用ログの表示オプション
export const DebugLogEnable = true;
export const DebugTouchLogEnable = false;

// Frameworkから出力するログのレベル設定
export const CubismLoggingLevel: LogLevel = LogLevel.LogLevel_Verbose;

// デフォルトのレンダーターゲットサイズ
export const RenderTargetWidth = 1900;
export const RenderTargetHeight = 1000;
