export declare const ErButton: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        size: {
            type: import('vue').PropType<import('./types').ButtonSize>;
        };
        type: {
            type: import('vue').PropType<import('./types').ButtonType>;
        };
        icon: {
            type: import('vue').PropType<string>;
        };
        circle: {
            type: import('vue').PropType<boolean>;
        };
        tag: {
            type: import('vue').PropType<string | import('vue').Component>;
            default: string;
        };
        plain: {
            type: import('vue').PropType<boolean>;
        };
        round: {
            type: import('vue').PropType<boolean>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        autofocus: {
            type: import('vue').PropType<boolean>;
        };
        nativeType: {
            type: import('vue').PropType<import('./types').NativeType>;
            default: string;
        };
        loading: {
            type: import('vue').PropType<boolean>;
        };
        loadingIcon: {
            type: import('vue').PropType<string>;
        };
        useThrottle: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        throttleDuration: {
            type: import('vue').PropType<number>;
            default: number;
        };
    }>> & Readonly<{
        onClick?: ((val: MouseEvent) => any) | undefined;
    }>, {
        ref: import('vue').Ref<HTMLButtonElement | void>;
        disabled: import('vue').ComputedRef<boolean>;
        size: import('vue').ComputedRef<import('./types').ButtonSize | "">;
        type: import('vue').ComputedRef<import('./types').ButtonType | "">;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (val: MouseEvent) => void;
    }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
        size: {
            type: import('vue').PropType<import('./types').ButtonSize>;
        };
        type: {
            type: import('vue').PropType<import('./types').ButtonType>;
        };
        icon: {
            type: import('vue').PropType<string>;
        };
        circle: {
            type: import('vue').PropType<boolean>;
        };
        tag: {
            type: import('vue').PropType<string | import('vue').Component>;
            default: string;
        };
        plain: {
            type: import('vue').PropType<boolean>;
        };
        round: {
            type: import('vue').PropType<boolean>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        autofocus: {
            type: import('vue').PropType<boolean>;
        };
        nativeType: {
            type: import('vue').PropType<import('./types').NativeType>;
            default: string;
        };
        loading: {
            type: import('vue').PropType<boolean>;
        };
        loadingIcon: {
            type: import('vue').PropType<string>;
        };
        useThrottle: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        throttleDuration: {
            type: import('vue').PropType<number>;
            default: number;
        };
    }>> & Readonly<{
        onClick?: ((val: MouseEvent) => any) | undefined;
    }>, {
        tag: string | import('vue').Component;
        nativeType: import('./types').NativeType;
        useThrottle: boolean;
        throttleDuration: number;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        size: {
            type: import('vue').PropType<import('./types').ButtonSize>;
        };
        type: {
            type: import('vue').PropType<import('./types').ButtonType>;
        };
        icon: {
            type: import('vue').PropType<string>;
        };
        circle: {
            type: import('vue').PropType<boolean>;
        };
        tag: {
            type: import('vue').PropType<string | import('vue').Component>;
            default: string;
        };
        plain: {
            type: import('vue').PropType<boolean>;
        };
        round: {
            type: import('vue').PropType<boolean>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        autofocus: {
            type: import('vue').PropType<boolean>;
        };
        nativeType: {
            type: import('vue').PropType<import('./types').NativeType>;
            default: string;
        };
        loading: {
            type: import('vue').PropType<boolean>;
        };
        loadingIcon: {
            type: import('vue').PropType<string>;
        };
        useThrottle: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        throttleDuration: {
            type: import('vue').PropType<number>;
            default: number;
        };
    }>> & Readonly<{
        onClick?: ((val: MouseEvent) => any) | undefined;
    }>, {
        ref: import('vue').Ref<HTMLButtonElement | void>;
        disabled: import('vue').ComputedRef<boolean>;
        size: import('vue').ComputedRef<import('./types').ButtonSize | "">;
        type: import('vue').ComputedRef<import('./types').ButtonType | "">;
    }, {}, {}, {}, {
        tag: string | import('vue').Component;
        nativeType: import('./types').NativeType;
        useThrottle: boolean;
        throttleDuration: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    size: {
        type: import('vue').PropType<import('./types').ButtonSize>;
    };
    type: {
        type: import('vue').PropType<import('./types').ButtonType>;
    };
    icon: {
        type: import('vue').PropType<string>;
    };
    circle: {
        type: import('vue').PropType<boolean>;
    };
    tag: {
        type: import('vue').PropType<string | import('vue').Component>;
        default: string;
    };
    plain: {
        type: import('vue').PropType<boolean>;
    };
    round: {
        type: import('vue').PropType<boolean>;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
    };
    autofocus: {
        type: import('vue').PropType<boolean>;
    };
    nativeType: {
        type: import('vue').PropType<import('./types').NativeType>;
        default: string;
    };
    loading: {
        type: import('vue').PropType<boolean>;
    };
    loadingIcon: {
        type: import('vue').PropType<string>;
    };
    useThrottle: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    throttleDuration: {
        type: import('vue').PropType<number>;
        default: number;
    };
}>> & Readonly<{
    onClick?: ((val: MouseEvent) => any) | undefined;
}>, {
    ref: import('vue').Ref<HTMLButtonElement | void>;
    disabled: import('vue').ComputedRef<boolean>;
    size: import('vue').ComputedRef<import('./types').ButtonSize | "">;
    type: import('vue').ComputedRef<import('./types').ButtonType | "">;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (val: MouseEvent) => void;
}, string, {
    tag: string | import('vue').Component;
    nativeType: import('./types').NativeType;
    useThrottle: boolean;
    throttleDuration: number;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<Record<string, any>> & Record<string, any>;
}) & import('vue').Plugin;
export declare const ErButtonGroup: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        size: {
            type: import('vue').PropType<import('./types').ButtonSize>;
        };
        type: {
            type: import('vue').PropType<import('./types').ButtonType>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
        size: {
            type: import('vue').PropType<import('./types').ButtonSize>;
        };
        type: {
            type: import('vue').PropType<import('./types').ButtonType>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
    }>> & Readonly<{}>, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        size: {
            type: import('vue').PropType<import('./types').ButtonSize>;
        };
        type: {
            type: import('vue').PropType<import('./types').ButtonType>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    size: {
        type: import('vue').PropType<import('./types').ButtonSize>;
    };
    type: {
        type: import('vue').PropType<import('./types').ButtonType>;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
}) & import('vue').Plugin;
