import React, {Component} from 'react';
import {connect} from 'react-redux';
import ArtistCard from '../components/ArtistCard';
import SearchBar from '../components/SearchBar';

export class Artists extends React.Component {
  constructor(props) {
    super(props);
  }


  renderArtists() {
    const chunk = 5;
    const {dispatch} = this.props;
    const {items} = this.props.artists;
    const {input} = this.props.inputs;

    let result = [];

    for (let i = 0; i < items.length; i += chunk) {
      let artistCards = items
        .slice(i, i + chunk)
        .map((artist, idx) => {
          return <ArtistCard key={artist.id} artist={artist} />
      });

      if (artistCards.length < chunk) {
        for (let j = 0; j < chunk - artistCards.length + 1; j++) {
          artistCards.push(<div className="col-md-2" key={'artist-placeholder-' + j}></div>);
        }
      }

      result.push(<div className="row equal" key={'songs-row-' + i}>{artistCards}</div>);
    }

    if (!result || result.length === 0) {
      return <SearchBar dataType="artists" dispatch={dispatch} value={input} />;
    }

    return result;
  }

  render() {
    return (
      <div>
        {this.renderArtists()}
      </div>
    );
  }
}


function mapStateToProps(state) {
  const {artists, inputs} = state;
  return {
    artists: artists.toJS(),
    inputs: inputs.toJS() 
  };
}

export const ArtistsContainer = connect(mapStateToProps)(Artists);
