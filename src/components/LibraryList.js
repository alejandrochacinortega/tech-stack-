import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';

import { ListItem } from './';

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }
  
  renderRow = (library) => {
    return <ListItem library={library} />
  };

  render() {
    console.log(' log ', this.props);
    return (
      <ListView dataSource={this.dataSource}
                renderRow={this.renderRow}
                style={{ marginTop: 10 }}
      />
    );
  }
}

mapStateToProps = state => {
  return {
    libraries: state.libraries,
  };
};

export default connect(mapStateToProps, null)(LibraryList);
