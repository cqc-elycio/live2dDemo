/**
 * 将Moc文件中的id值和资源文件名称及对应的url映射到程序中
 */
import {resourcesConfig } from './lappdefine'

export class MocMapper {
    public parameterIdMAp: Map<string, string> = new Map();
    public resourcesPathToUrlMap = new Map();
    public jsonResources = null;
    //模型的放大倍率
    public scale = 1;
    public static mapper: MocMapper = null;

/**
 * 根据url地址获取资源路径和url的映射对象
 * @param url 保存映射关系的json的url地址
 */
    public static  getInstance() {
        if (this.mapper == null) {
            this.mapper = new MocMapper();
        }
        return this.mapper;
    }

//

    /**
     * 将当前模型的id值保存到键值对中
     * @param defaultParameter 官方默认的id值
     * @param currentModParameter  当前模型中与官方默认值效果相同的id值
     * @note 一般只需要设置 ParamEyeBall[X,Y]  ParamAngle[X,Y,Z]
     */
    public setParameter(defaultParameter: string, currentModParameter: string) {
        this.parameterIdMAp.set(defaultParameter,currentModParameter)
    }
    /**
     * 
     * @param defaultParameter 根据默认id值获取当前模型对应的id值
     * @returns 
     */
    public getParemeter(defaultParameter: string): string {
        return this.parameterIdMAp.get(defaultParameter)
    }
/**
 * 
 * @param resourcesPath moc3.json中的资源路径
 * @param url 服务器中该路径对应文件的访问地址
 */
    public setPathToUrl(resourcesPath:string, url:string) {
        this.resourcesPathToUrlMap.set(resourcesPath, url);
    }

/**
 *  根据资源路径获取url
 * 主要用于映射上传到对象存储服务器的文件与实际中的目录结构
 * @param resourcesPath 资源路径
 * @returns 
 */
    public getUrl(resourcesPath: string): string {
        return this.resourcesPathToUrlMap.get(resourcesPath)
    }

    public getJsonConfig() {
        return this.jsonResources;
    }

    /**
     * 获取模型的放大倍率
     * @returns 缩放倍率
     */
    public getScale() { return this.scale}
/**
 * 从指定url读取模型目录中的mapper.json【自定义的变量映射关系文件】文件
 * @param url mapper文件的url
 */
    public async setMapperJson(url: string) {
        this.jsonResources = await fetch(url).then(async function (response) {
            const json = await response.json();
            return json;
        })

        let arrayOfparameters = this.getJsonConfig().parameter;
        let arrayOfUrl = this.getJsonConfig().url;
        
        //将id值存入map中
        for (let i = 0; i < arrayOfparameters.length; i++) {
          let item = arrayOfparameters[i]
          for (let key in item) {
            this.setParameter(key,item[key])
          }
        }
        //将资源路径和url映射关系存入map中
        for (let i = 0; i < arrayOfUrl.length;i++) {
          let item = arrayOfUrl[i]
          for (let key in item) {
            this.setParameter(key,item[key])
          }
        }

        //设置模型的中心位置
        let centerPointScal = this.getJsonConfig().center;
        resourcesConfig.setXscale(centerPointScal[0]);
        resourcesConfig.setYscale(centerPointScal[1]);
        //模型的缩放倍率
        let model_scale = this.getJsonConfig().model_scale;
        if (model_scale == undefined || model_scale <= 0 || model_scale>50) {
            model_scale = 1;
        }
        this.scale = model_scale;
        resourcesConfig.setModelScale(model_scale);

    }
}