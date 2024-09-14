import { Plugin } from 'vue';

type SFCWithInstall<T> = T & Plugin;
export declare function makeInstaller(componets: Plugin[]): Plugin;
export declare const withInstall: <T>(component: T) => SFCWithInstall<T>;
export {};
