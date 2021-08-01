/**
 * 将Moc文件中的id值和资源文件名称及对应的url映射到程序中
 */

export class MocMapper {
    private parameterIdMAp: Map<string, string> = new Map();
    private resourcesPathToUrlMap = new Map();
    private jsonResources = null;
    public static mapper: MocMapper = null;

/**
 * 根据url地址获取资源路径和url的映射对象
 * @param url 保存映射关系的json的url地址
 */
    public static async getInstance(url: string) {
        if (this.mapper == null) {
            this.mapper = new MocMapper();
        }
        this.mapper.jsonResources = await fetch(url).then(async function (response) {
            const json = await response.json();
            return json;
        })
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
 * @param resourcesPath 资源路径
 * @returns 
 */
    public getUrl(resourcesPath: string): string {
        return this.resourcesPathToUrlMap.get(resourcesPath)
    }

    public getJsonConfig() {
        return this.jsonResources;
    }
}