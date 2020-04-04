import {useDispatch, useSelector} from 'react-redux';

import {TinyFile} from '@/iterfaces/TinyFile';
import {Store} from '@/store';

import {setActiveCategory, setAvailableCategories} from './actionCreators';

export const useAvailableCategories = (): [
    TinyFile[],
    (availableCategories: TinyFile[]) => void,
] => {
    const dispatch = useDispatch();

    return [
        useSelector<Store, TinyFile[]>((state) => state.image.availableCategories),
        (availableCategories: TinyFile[]) =>
            dispatch(setAvailableCategories(availableCategories)),
    ];
};

export const useActiveCategory = (): [
    TinyFile | undefined,
    (availableCategories: TinyFile) => void,
] => {
    const dispatch = useDispatch();
    return [
        useSelector<Store, TinyFile | undefined>(
            (state) => state.image.activeCategory,
        ),
        (activeCategory: TinyFile) => dispatch(setActiveCategory(activeCategory)),
    ];
};
