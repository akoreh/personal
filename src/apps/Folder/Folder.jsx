import React from 'react';

import Icon from '../../components/Icons/Icon';

import cls from './Folder.module.scss';

const EmptyFolderContent = () => (
    <div className={cls.emptyFolderContent}>
        <p>This folder is empty</p>
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

export default Folder;