import React from 'react';

import {FileTree} from '~types/TinyFile';

import {Image, ImageContainer, ImageName} from './styles';

type ImageProps = {
    image: FileTree;
};

const ImagePreview: React.FC<ImageProps> = ({image}) => {
    return (
        <ImageContainer>
            <Image src={'atom:///' + image.path} alt={image.name} />
            <ImageName>{image.name}</ImageName>
        </ImageContainer>
    );
};

export default ImagePreview;
