import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import CardSection from './common';
import * as actions from '../actions';

class ListItem extends Component {
  renderDescription() {
    const { library, selecLibraryId } = this.props;

    if (this.props.library.id === selecLibraryId) {
      return (
        <Text>{library.descption}</Text>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selecLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = state => {
  return { selecLibraryId: state.selecLibraryId };
}

export default connect(mapStateToProps, actions)(ListItem);

// 93. Test.
// 96, 99
