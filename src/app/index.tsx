import * as React from 'react';
import { Router } from 'react-router-dom';
import { Global } from '@emotion/core';
import { I18nextProvider } from 'react-i18next';
import { hot } from 'react-hot-loader/root';

import i18n, { i18nInit, i18nUnload } from 'i18n';

import { Consumer } from 'store';
import { CoreLayout } from 'layouts';
import { browserHistory } from 'utils';
import { ErrorBoundary } from 'components';

import Switcher from './routes';
import GlobalStyle from './styles';

export interface OuterProps {
  history?: {
    location: any,
  };
}

class App extends React.Component<OuterProps, {}> {

  timeout: any = null;

  componentDidMount () {
    i18nInit();
  }

  componentWillUnmount () {
    i18nUnload();
  }

  render () {
    return (
      <ErrorBoundary>
        <I18nextProvider i18n={i18n}>
          <Router history={browserHistory}>
            <CoreLayout>
              <React.Suspense fallback={<div>Loading...</div>}>
                <Consumer>
                  {context => <Switcher {...context} />}
                </Consumer>
              </React.Suspense>
            </CoreLayout>

            <Global styles={GlobalStyle} />
          </Router>
        </I18nextProvider>
      </ErrorBoundary>
    );
  }

}

export default hot(App);
