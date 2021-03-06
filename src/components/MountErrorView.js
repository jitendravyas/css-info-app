import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

const MountErrorView = ({
  cssFile,
  onLogoClick,
}) => (
  <div className="flex flex-column height-100">
    <Header onLogoClick={onLogoClick} />
    <div
      className="flex-auto overflow-scroll flex justify-center items-center"
    >
      <div className="flex flex-column items-start">
        <div className="bg-red-15 red px2 py1 rounded mb1">
          <strong>
            Could not {cssFile.error.type} <em>{cssFile.name}</em>
          </strong>
          <br />
          {cssFile.error.message}
        </div>
        <span
          tabIndex={0}
          role="button"
          onClick={onLogoClick}
          className="cursor-pointer gray mx1"
        >
          ← Go back
        </span>
      </div>
    </div>
  </div>
);

MountErrorView.defaultProps = {};

MountErrorView.propTypes = {
  cssFile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    error: PropTypes.shape({
      type: PropTypes.string,
      message: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onLogoClick: PropTypes.func.isRequired,
};

export default MountErrorView;
