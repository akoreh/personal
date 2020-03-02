import React from 'react';

import Icon from '../../components/Icons/Icon';

import folderAnimationData from '../../assets/anim/folder.json';

import cls from './Folder.module.scss';

const EmptyFolderContent = () => (
    <div className={cls.emptyFolderContent}>
        <p className={cls.message}>This folder is empty</p>
    </div>
);

const Folder = ({ icons }) => {
    return <div className={cls.folder}>
        <div className={cls.content}>
            {icons ? 
                icons.map(icon => <Icon key={icon.key} {...icon} />)
                :
                <EmptyFolderContent />
            }
        </div>
    </div>
};

export const appOpts = {
    content: <Folder />,
    type: 'folder',
};

export const folderIcon = {
    animationData: folderAnimationData,
    loop: false,
    autoplay: false,
    playOnHover: true,
};

export default Folder;