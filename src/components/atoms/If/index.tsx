import React from 'react';

import {FCC} from '~types/global';

type IfProps = {
    condition: boolean | unknown;
};

export const If: FCC<IfProps> = ({condition, children}) => {
    return condition ? <>{children}</> : null;
};
