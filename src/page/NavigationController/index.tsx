import React, {useEffect} from 'react';

import {useIsDashboard} from '~providers/AppProvider';

import {FCC} from '~types/global';
import {useNavigationSubscription} from '~utils/hooks/useNavigation';

type NavigationControllerProps = {
    title: string;
    isMain?: boolean;
};

const NavigationController: FCC<NavigationControllerProps> = ({
    children,
    title,
    isMain,
}) => {
    const {setIsDashboard} = useIsDashboard();
    useNavigationSubscription();

    useEffect(() => {
        document.title = `TinyPng - ${title}`;
        setIsDashboard(Boolean(isMain));
    }, [title, isMain]);

    return <>{children}</>;
};

export default NavigationController;
