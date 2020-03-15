import React from "react";
import { connect } from "react-redux";

import Icon from "../Icons/Icon";

import { openWindowAndSetFocused } from "../../redux/windows/windows.actions";
import {
  windowOpts as folderWindowOpts,
  folderIcon
} from "../../apps/Folder/Folder";

import cls from "./DesktopIcons.module.scss";

const DesktopIcons = ({ openWindowAndSetFocused }) => {
  const [icons, setIcons] = React.useState([]);

  React.useEffect(() => {
    setIcons([
      {
        ...folderIcon,
        id: "projectsFolder",
        label: "Projects",
        className: cls.folderIcon,
        onClick: openFolder
      },
      {
        ...folderIcon,
        id: "uiuxfolder",
        label: "UI/UX",
        className: cls.folderIcon,
        onClick: openFolder
      }
    ]);
  }, []);

  function openFolder() {
    const { id, label: title } = this;

    openWindowAndSetFocused({ id, title, ...folderWindowOpts });
  }

  return (
    <div className={cls.desktopIcons}>
      {icons.map(icon => (
        <Icon key={icon.id} {...icon} />
      ))}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  openWindowAndSetFocused: windowOpts =>
    dispatch(openWindowAndSetFocused(windowOpts))
});

export default connect(null, mapDispatchToProps)(DesktopIcons);
