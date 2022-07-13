import React from 'react';

import ModelSelect from '~components/SaveModeBlock/ModeSelect';

import {usePrefixes, useSaveMode} from '~providers/AppProvider';
import {SaveMode} from '~types/Settings';

import {Container, Pre} from './styles';

const SaveModeBlock = () => {
    const {saveMode, setSaveMode} = useSaveMode();
    const {prefixes, setPrefixes} = usePrefixes();

    return (
        <Container>
            <h3>How to save compressed files</h3>
            <ModelSelect
                mode={SaveMode.Overwrite}
                activeMode={saveMode}
                changeMode={setSaveMode}
                label={'Overwrite original file'}
            />
            <ModelSelect
                mode={SaveMode.Prefix}
                activeMode={saveMode}
                changeMode={setSaveMode}
                inputValue={prefixes.prefix}
                inputValueChange={(prefix) => setPrefixes({prefix})}
                label={'Add prefix to file'}
            >
                <Pre>image.png </Pre>
                {'-->'}
                <Pre>
                    <b>{prefixes.prefix}</b>image.png
                </Pre>
            </ModelSelect>
            <ModelSelect
                mode={SaveMode.Suffix}
                activeMode={saveMode}
                changeMode={setSaveMode}
                inputValue={prefixes.suffix}
                inputValueChange={(suffix) => setPrefixes({suffix})}
                label={'Add suffix to file'}
            >
                <Pre>
                    image.png --{'>'} image<b>{prefixes.suffix}</b>.png
                </Pre>
            </ModelSelect>
            <ModelSelect
                mode={SaveMode.PrefixRoot}
                activeMode={saveMode}
                changeMode={setSaveMode}
                inputValue={prefixes.rootPrefix}
                inputValueChange={(rootPrefix) => setPrefixes({rootPrefix})}
                label={'Add prefix to parent folder'}
            >
                <Pre>/Download/images/image.png </Pre>
                {'-->'}
                <Pre>
                    /Download/<b>{prefixes.rootPrefix}</b>images/image.png
                </Pre>
            </ModelSelect>
            <ModelSelect
                mode={SaveMode.SuffixRoot}
                activeMode={saveMode}
                changeMode={setSaveMode}
                inputValue={prefixes.rootSuffix}
                inputValueChange={(rootSuffix) => setPrefixes({rootSuffix})}
                label={'Add prefix to parent folder'}
            >
                <Pre>/Download/images/image.png</Pre>
                {'-->'}
                <Pre>
                    /Download/images
                    <b>{prefixes.rootSuffix}</b>/image.png
                </Pre>
            </ModelSelect>
            <ModelSelect
                mode={SaveMode.ContDir}
                activeMode={saveMode}
                changeMode={setSaveMode}
                pathValue={prefixes.saveDir}
                pathValueChange={(saveDir) => setPrefixes({saveDir})}
                label={'Always save in folder'}
            />
        </Container>
    );
};

export default SaveModeBlock;
