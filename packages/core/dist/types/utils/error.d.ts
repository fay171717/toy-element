declare class ErUIError extends Error {
    constructor(message: string);
}
export declare function createErUIError(scope: string, msg: string): ErUIError;
export declare function throwError(scope: string, msg: string): void;
export declare function debugWarn(error: Error): void;
export declare function debugWarn(scope: string, msg: string): void;
export {};
