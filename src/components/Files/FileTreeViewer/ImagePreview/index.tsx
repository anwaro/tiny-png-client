import React from 'react';

import {If} from '~components/atoms/If';
import useCompressStats from '~hooks/useCompressStats';

import {IcpProtocol} from '~ipc/types';

import {FileStatus, FileTree} from '~types/TinyFile';

import {
    Error,
    Image,
    ImageContainer,
    ImageName,
    Progress,
    Row,
    Stat,
} from './styles';

type ImageProps = {
    image: FileTree;
};

const ImagePreview: React.FC<ImageProps> = ({image}) => {
    const {size, optimizedSize, percent} = useCompressStats(image);

    return (
        <>
            <ImageContainer>
                <Row>
                    <Image
                        src={IcpProtocol.Atom + ':///' + image.path}
                        alt={image.name}
                    />
                    <ImageName>{image.name}</ImageName>
                </Row>
                <If condition={image.status === FileStatus.Optimized}>
                    <Stat>
                        {optimizedSize} / {size} ({percent}%)
                    </Stat>
                </If>
                <Progress progress={image.progress} />
            </ImageContainer>
            <Error>{image.error}</Error>
        </>
    );
};

export default ImagePreview;
