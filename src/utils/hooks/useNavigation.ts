import {useCallback, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const NAVIGATE_EVENT_NAME = 'NAVIGATE_EVENT_NAME';

export type PathType = string | number;

export default function useNavigation() {
    return useCallback((path: PathType) => {
        document.dispatchEvent(
            new CustomEvent<PathType>(NAVIGATE_EVENT_NAME, {detail: path}),
        );
    }, []);
}

export function useNavigationSubscription() {
    const navigate = useNavigate();
    // const navigate = useNavigate();

    useEffect(() => {
        const goTo = (e: CustomEvent<PathType>) => {
            // @ts-ignore
            navigate(e.detail);
        };
        document.addEventListener(NAVIGATE_EVENT_NAME, goTo);

        return () => {
            document.removeEventListener(NAVIGATE_EVENT_NAME, goTo);
        };
    }, []);
}
