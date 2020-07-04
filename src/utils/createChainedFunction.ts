export default function createChainedFunction(...funcs) {
    return funcs.reduce(
        (acc, func) => {
            if (func == null) {
                return acc;
            }

            if (process.env.NODE_ENV !== 'production') {
                if (typeof func !== 'function') {
                    console.error(
                        'UI-Component: Invalid Argument Type, must only provide functions, undefined, or null.',
                    );
                }
            }

            return function chainedFunction(...args) {
                acc.apply(this, args);
                func.apply(this, args);
            };
        },
        () => {
        },
    );
}
