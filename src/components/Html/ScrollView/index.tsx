import React, {HTMLAttributes} from 'react';

import {ScrollInner, ScrollInnerProps, StyledScrollView} from './styles';

type ScrollViewProps = HTMLAttributes<HTMLDivElement> & ScrollInnerProps;

const ScrollView = React.forwardRef<HTMLDivElement, ScrollViewProps>(
    ({children, padding = [0], ...restProps}, ref) => {
        return (
            <StyledScrollView ref={ref} {...restProps}>
                <ScrollInner padding={padding}>{children}</ScrollInner>
            </StyledScrollView>
        );
    },
);

ScrollView.displayName = 'ScrollView';

export default ScrollView;
