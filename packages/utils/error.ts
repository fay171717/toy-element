import { isString } from "lodash-es";

class ErUIError extends Error {
  constructor(message: string) {
    //组件库Ui上面的报错
    super(message);
    this.name = "ErUIError";
  }
}

//告诉用户什么地方出错了
export function throwError(scope: string, msg: string) {
  throw new ErUIError(`[${scope}] ${msg}`);
}

//重载
export function debugWarn(error: Error): void;
//给他scope告诉是哪个地方报错
export function debugWarn(scope: string, msg: string): void;
//定义真实的逻辑
export function debugWarn(scope: string | Error, msg?: string) {
  //如果
  if (process.env.NODE_ENV !== "production") {
    const err = isString(scope) ? new ErUIError(`[${scope}] ${msg}`) : scope;
    console.warn(err);
  }
}
