import React, {useState} from 'react';

import {RoutingPaths} from '~page/App';
import useNavigation, {PathType} from '~utils/hooks/useNavigation';

import {useIsDashboard} from '../../../providers/AppProvider';

import {
    LeftButton,
    MenuContainer,
    MenuInner,
    MenuLink,
    MenuWrapper,
    RightButton,
} from './styles';

const Menu: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const {isDashboard} = useIsDashboard();
    const navigate = useNavigation();
    const goTo = (path: PathType) => () => {
        navigate(path);
        setMenuOpen(false);
    };

    return (
        <MenuContainer>
            <LeftButton
                icon={isDashboard ? 'settings' : 'prev'}
                onClick={goTo(
                    isDashboard ? RoutingPaths.Settings : RoutingPaths.Dashboard,
                )}
            />
            <MenuWrapper open={menuOpen} />
            <MenuInner open={menuOpen}>
                <MenuLink
                    onClick={goTo(RoutingPaths.Dashboard)}
                    open={menuOpen}
                    index={0}
                    icon={'home'}
                    text={'Dashboard'}
                />
                <MenuLink
                    open={menuOpen}
                    index={1}
                    onClick={goTo(RoutingPaths.Settings)}
                    icon={'settings'}
                    text={'Settings'}
                />
                <MenuLink
                    open={menuOpen}
                    index={2}
                    onClick={goTo(RoutingPaths.About)}
                    icon={'info'}
                    text={'About'}
                />
            </MenuInner>
            <RightButton
                icon={menuOpen ? 'close' : 'menu'}
                onClick={() => setMenuOpen(!menuOpen)}
            />
        </MenuContainer>
    );
};

export default Menu;
