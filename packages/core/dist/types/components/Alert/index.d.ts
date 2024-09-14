export declare const ErAlert: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        type: {
            type: import('vue').PropType<import('./types').AlertType>;
            default: string;
        };
        title: {
            type: import('vue').PropType<string>;
        };
        description: {
            type: import('vue').PropType<string>;
        };
        effect: {
            type: import('vue').PropType<"light" | "dark">;
            default: string;
        };
        closable: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        center: {
            type: import('vue').PropType<boolean>;
        };
        showIcon: {
            type: import('vue').PropType<boolean>;
        };
    }>> & Readonly<{
        onClose?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        close: () => void;
    }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
        type: {
            type: import('vue').PropType<import('./types').AlertType>;
            default: string;
        };
        title: {
            type: import('vue').PropType<string>;
        };
        description: {
            type: import('vue').PropType<string>;
        };
        effect: {
            type: import('vue').PropType<"light" | "dark">;
            default: string;
        };
        closable: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        center: {
            type: import('vue').PropType<boolean>;
        };
        showIcon: {
            type: import('vue').PropType<boolean>;
        };
    }>> & Readonly<{
        onClose?: (() => any) | undefined;
    }>, {
        type: import('./types').AlertType;
        effect: "light" | "dark";
        closable: boolean;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        type: {
            type: import('vue').PropType<import('./types').AlertType>;
            default: string;
        };
        title: {
            type: import('vue').PropType<string>;
        };
        description: {
            type: import('vue').PropType<string>;
        };
        effect: {
            type: import('vue').PropType<"light" | "dark">;
            default: string;
        };
        closable: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        center: {
            type: import('vue').PropType<boolean>;
        };
        showIcon: {
            type: import('vue').PropType<boolean>;
        };
    }>> & Readonly<{
        onClose?: (() => any) | undefined;
    }>, {}, {}, {}, {}, {
        type: import('./types').AlertType;
        effect: "light" | "dark";
        closable: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    type: {
        type: import('vue').PropType<import('./types').AlertType>;
        default: string;
    };
    title: {
        type: import('vue').PropType<string>;
    };
    description: {
        type: import('vue').PropType<string>;
    };
    effect: {
        type: import('vue').PropType<"light" | "dark">;
        default: string;
    };
    closable: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    center: {
        type: import('vue').PropType<boolean>;
    };
    showIcon: {
        type: import('vue').PropType<boolean>;
    };
}>> & Readonly<{
    onClose?: (() => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: () => void;
}, string, {
    type: import('./types').AlertType;
    effect: "light" | "dark";
    closable: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        title?(_: {}): any;
        default?(_: {}): any;
    };
}) & import('vue').Plugin;
export * from './types';
