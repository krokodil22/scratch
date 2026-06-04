import grisha1 from '../../../static/sprites/Grisha1.png';
import grisha2 from '../../../static/sprites/Grisha2.png';
import grisha3 from '../../../static/sprites/Grisha3.png';

import back1 from '../../../static/backs/back1.png';
import back2 from '../../../static/backs/back2.png';
import back3 from '../../../static/backs/back3.png';
import back4 from '../../../static/backs/back4.png';

const imageTypeForFile = fileName => {
    const extension = fileName.split('.')
        .pop()
        .toLowerCase();
    switch (extension) {
    case 'jpg':
    case 'jpeg':
        return 'image/jpeg';
    case 'svg':
        return 'image/svg+xml';
    case 'gif':
        return 'image/gif';
    case 'bmp':
        return 'image/bmp';
    case 'png':
    default:
        return 'image/png';
    }
};

const assetNameForFile = fileName => fileName.replace(/\.[^.]+$/, '');

const makeImageLibraryItem = fileName => rawURL => ({
    name: assetNameForFile(fileName),
    rawURL,
    fileName,
    fileType: imageTypeForFile(fileName),
    tags: ['local']
});

const spriteAsset = makeImageLibraryItem;
const backdropAsset = makeImageLibraryItem;

const spriteLibraryContent = [
    spriteAsset('Grisha1.png')(grisha1),
    spriteAsset('Grisha2.png')(grisha2),
    spriteAsset('Grisha3.png')(grisha3)
];

const backdropLibraryContent = [
    backdropAsset('back1.png')(back1),
    backdropAsset('back2.png')(back2),
    backdropAsset('back3.png')(back3),
    backdropAsset('back4.png')(back4)
];

export {
    backdropLibraryContent,
    spriteLibraryContent
};
