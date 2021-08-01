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
    public resourcesPath: string;
    public modelNames: string[];
    public modelSize: number;
    public canvasId: string = 'live2d';
    public x_scal: number = 2;
    public y_scal:number = 1
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

    public setModelNames(models:string[]) {
        this.modelNames = models;
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
    
    public setXscal(scal:number) {  this.x_scal = scal }
    public setYscal(scal:number) {  this.y_scal = scal}
    public getXscal() { return this.x_scal }
    public getYscal() { return this.y_scal}

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

// モデル定義---------------------------------------------
// モデルを配置したディレクトリ名の配列
// ディレクトリ名とmodel3.jsonの名前を一致させておくこと
//export const ModelDir: string[] = ['Haru', 'Hiyori', 'Mark', 'Natori', 'Rice'];
//export const ModelDirSize: number = ModelDir.length;

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
