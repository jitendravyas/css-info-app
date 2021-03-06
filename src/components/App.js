import React from 'react';
import PropTypes from 'prop-types';

import 'amino-css/dist/amino.css';

import StartView from '../containers/StartView';
import MainView from '../containers/MainView';
import MountErrorView from '../containers/MountErrorView';
import MountLoadingView from '../containers/MountLoadingView';

const App = ({
  mountedCSSFile,
}) => {
  if (!mountedCSSFile) {
    return (
      <StartView />
    );
  }
  if (mountedCSSFile.error) {
    return (
      <MountErrorView />
    );
  }
  if (mountedCSSFile.loading) {
    return (
      <MountLoadingView />
    );
  }
  return (
    <MainView />
  );
};

App.propTypes = {
  mountedCSSFile: PropTypes.any,
};

App.defaultProps = {
  mountedCSSFile: null,
};

export default App;
