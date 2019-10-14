interface Extra {
    extra: string | undefined;
}

interface ClassToggles {
    [K: string]: boolean;
}

function classes(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ')
}

export default classes

const scopedClassMaker = (prefix: string) =>
    (name?: string | ClassToggles | undefined, options?: Extra) =>
        Object
            .entries(name instanceof Object ? name : {[name as string]: name})
            .filter(kv => kv[1] !== false)
            .map(kv => kv[0])
            .map(name => [prefix, name]
                .filter(Boolean)
                .join('-'))
            .concat(options && options.extra || [])
            .join(' ');


export {scopedClassMaker}
