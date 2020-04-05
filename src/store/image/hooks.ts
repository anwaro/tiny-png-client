import {useDispatch, useSelector} from 'react-redux';

import {Store} from '@/store';

import {setActiveCategory, setAvailableCategories} from './actionCreators';

export const useAvailableCategories = (): [
    string[],
    (availableCategories: string[]) => void,
] => {
    const dispatch = useDispatch();

    return [
        useSelector<Store, string[]>((state) => state.image.availableCategories),
        (availableCategories: string[]) =>
            dispatch(setAvailableCategories(availableCategories)),
    ];
};

export const useActiveCategory = (): [
    string | undefined,
    (availableCategories: string) => void,
] => {
    const dispatch = useDispatch();
    return [
        useSelector<Store, string | undefined>(
            (state) => state.image.activeCategory,
        ),
        (activeCategory: string) => dispatch(setActiveCategory(activeCategory)),
    ];
};
