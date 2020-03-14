import React, { Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Window from "../Window/Window";

import { selectOpenWindows } from "../../redux/windows/windows.selectors";

const DesktopWindows = ({ openWindows }) => (
  <Fragment>
    {openWindows.map(window => (
      <Window key={window.id} window={window}>
        {window.content}
      </Window>
    ))}
  </Fragment>
);

const mapStateToProps = createStructuredSelector({
  openWindows: selectOpenWindows
});

export default connect(mapStateToProps)(DesktopWindows);
