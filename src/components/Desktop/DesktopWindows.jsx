import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Window from "../Window/Window";

import { selectOpenWindows } from "../../redux/windows/windows.selectors";

const DesktopWindows = ({ openWindows }) => (
  <React.Fragment>
    {openWindows.map(window => (
      <Window key={window.id} window={window}>
        {window.content}
      </Window>
    ))}
  </React.Fragment>
);

const mapStateToProps = createStructuredSelector({
  openWindows: selectOpenWindows
});

export default connect(mapStateToProps)(DesktopWindows);
