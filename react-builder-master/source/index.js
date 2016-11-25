import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Router, {Route} from 'react-router';
import history from './constants/History';

import buildStore from './store/buildStore';
import {App} from './components/App';
import {ArtistsContainer} from './components/Artists';
import {ArtistViewContainer} from './components/ArtistView';
import {AlbumViewContainer} from './components/AlbumView';
import Albums from './components/Albums';
import Index from './components/Index';

const store = buildStore();

class Routes extends React.Component {
 render() {
     return (
      <div>
        <Provider store={store}>
          <Router>
            <Route path="/" component={App}>
              <Route path="artists" component={ArtistsContainer} />
              <Route path="artist/:id" component={ArtistViewContainer} />
              <Route path="albums" component={Albums} />
              <Route path="album/:id" component={AlbumViewContainer} />
            </Route>
          </Router>
        </Provider>
      </div>
    )
  }
}

ReactDOM.render(<Routes /> , document.getElementById('app') );
