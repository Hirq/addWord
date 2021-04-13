import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import { ThemeProviderDark } from 'context/ThemeContext';
import { routes } from 'routes';
import { Provider } from 'react-redux';
import store from 'redux/store';
import List from 'views/List';
import Blog from 'views/Blog';
import BlogDetail from 'views/BlogDetail';
import SetDetail from 'views/SetDetail';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProviderDark>
        <MainTemplate>
          <Switch>
            <Route exact path={routes.home} render={() => <Redirect to="/list" />} />
            <Route exact path={routes.list} component={List} />
            <Route exact path={routes.setList} component={SetDetail} />
            <Route exact path={routes.blog} component={Blog} />
            <Route exact path={routes.blogs} component={BlogDetail} />

            {/* <Route exact path={routes.note} component={Notes} />
            <Route path={routes.notes} component={DetailsPage} /> */}
          </Switch>
        </MainTemplate>
      </ThemeProviderDark>
    </BrowserRouter>
  </Provider>
);

export default Root;
