import {useEffect, useRef} from 'react';

type Opt<R> = R | undefined;

export default function useCurrentRef<T>(value?: Opt<T>) {
    const valueRef = useRef<Opt<T>>(value);

    useEffect(() => {
        valueRef.current = value;
    }, [value]);

    return valueRef;
}
