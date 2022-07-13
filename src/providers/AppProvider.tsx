import React, {createContext, ReactNode, useContext} from 'react';

import {ApiKey} from '~types/ApiKey';

import {initialSettings, Prefixes, SaveMode, SettingsType} from '~types/Settings';

import {useLocalStorage} from '~utils/hooks/useLocalStorage';

const AppContext = createContext<{
    settings: SettingsType;
    setSettings: (settings: SettingsType) => void;
}>({
    setSettings: () => {},
    settings: initialSettings,
});

export const AppProvider = ({children}: {children: ReactNode}) => {
    const [settings, setSettings] = useLocalStorage('settings', initialSettings);

    return (
        <AppContext.Provider value={{settings, setSettings}}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => useContext(AppContext);

export const useActiveKey = () => {
    const {settings, setSettings} = useApp();
    return {
        activeKey: settings.keys.find((k) => k.key === settings.activeKey),
        setActiveKey: (activeKey: ApiKey) =>
            setSettings({
                ...settings,
                activeKey: activeKey.key,
            }),
    };
};

export const useSaveMode = () => {
    const {settings, setSettings} = useApp();
    return {
        saveMode: settings.saveMode,
        setSaveMode: (saveMode: SaveMode) =>
            setSettings({
                ...settings,
                saveMode,
            }),
    };
};

export const useParallelCount = () => {
    const {settings, setSettings} = useApp();
    return {
        parallelCount: settings.parallelCount,
        setParallelCount: (parallelCount: number) =>
            setSettings({
                ...settings,
                parallelCount,
            }),
    };
};

export const useApiKeys = () => {
    const {settings, setSettings} = useApp();
    const updateKey = (key: ApiKey) =>
        settings.keys.some((k) => k.key === key.key)
            ? settings.keys.map((k) => (k.key === key.key ? key : k))
            : [...settings.keys, key];
    return {
        keys: settings.keys,
        addKey: (key: ApiKey) =>
            setSettings({
                ...settings,
                keys: updateKey(key),
                activeKey: settings.activeKey ? settings.activeKey : key.key,
            }),
        deleteKey: (key: ApiKey) => {
            const keys = settings.keys.filter((k) => k.key !== key.key);
            setSettings({
                ...settings,
                keys,
                activeKey:
                    key.key !== settings.activeKey
                        ? settings.activeKey
                        : keys?.[0]?.key,
            });
        },
        updateKey: (key: ApiKey) =>
            setSettings({
                ...settings,
                keys: updateKey(key),
            }),
    };
};

export const usePrefixes = () => {
    const {settings, setSettings} = useApp();
    return {
        prefixes: settings.prefixes,
        setPrefixes: (prefixes: Partial<Prefixes>) =>
            setSettings({
                ...settings,
                prefixes: {...settings.prefixes, ...prefixes},
            }),
    };
};

export const useIsDashboard = () => {
    const {settings, setSettings} = useApp();
    return {
        isDashboard: settings.dashboard,
        setIsDashboard: (dashboard: boolean) =>
            setSettings({
                ...settings,
                dashboard,
            }),
    };
};
