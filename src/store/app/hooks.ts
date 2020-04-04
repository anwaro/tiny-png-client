import {useDispatch, useSelector} from 'react-redux';

import {Store} from '@/store';

import {setMenuOpen} from './actionCreators';

export const useMenuOpen = (): [boolean, (open: boolean) => void] => {
    const dispatch = useDispatch();
    return [
        useSelector<Store, boolean>((state) => state.app.menuOpen),
        (open: boolean) => dispatch(setMenuOpen(open)),
    ];
};

export const useToggleMenu = () => {
    const dispatch = useDispatch();
    const open = useSelector<Store, boolean>((state) => state.app.menuOpen);
    dispatch(setMenuOpen(!open));
};
