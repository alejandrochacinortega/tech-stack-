import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import { styles } from './';
import { selectLibrary } from './actions';

class ListItem extends Component {
  componentDidUpdate() {
    LayoutAnimation.spring();
  }
  
  renderDescription = () => {
    const { library, selectedLibraryId } = this.props;
    if (library.id === selectedLibraryId) {
      return (
        <CardSection>
          <Text style={{flex: 1}}>{this.props.library.description}</Text>
        </CardSection>
      );
    }
  };

  render() {
    const { listItemTitle } = styles;
    const { title, id } = this.props.library;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection style={listItemTitle}>
            <Text>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

mapStateToProps = state => {
  console.log(' state ', state);
  return {
    selectedLibraryId: state.selectedLibraryId,
  };
};

export default connect(mapStateToProps, { selectLibrary })(ListItem);
