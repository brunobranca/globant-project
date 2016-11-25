import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getArtistDetails} from '../actions/artists';
import {getArtistAlbums} from '../actions/albums';

import ArtistMainDetails from './ArtistMainDetails';
import ArtistAlbums from './ArtistAlbums';

export class ArtistView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {id} = this.props.params;
    const {dispatch} = this.props;
    dispatch(getArtistDetails(id));
    dispatch(getArtistAlbums(id));
  }

  render() {
    const {id}  = this.props.params;
    const {artists} = this.props;
    const {albums} = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <ArtistMainDetails details={artists.details} albums={albums.total} />
          <ArtistAlbums albums={albums.items} artist={artists.details}/>
        </div>
      </div>
    )
  }
}


export function mapStateToProps(state) {
  const {artists, albums} = state;
  return {
    artists: artists.toJS(), 
    albums: albums.toJS()
  };
}

export const ArtistViewContainer = connect(mapStateToProps)(ArtistView);
