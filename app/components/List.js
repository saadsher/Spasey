import React from 'react'
import {
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  RecyclerViewBackedScrollView,
  Text,
  View,
} from 'react-native'

var List = React.createClass({
  getInitialState() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    return {
      dataSource: ds.cloneWithRows(this._genRows({})),
    }
  },

  _pressData({}: {[key: number]: boolean}){},

  componentWillMount() {
    this._pressData = {};
  },

  render() {
    return (
      // <Text style={styles.title}>S E R V I C E</Text>
      <ListView
        contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
        renderSeparator={this._renderSeperator}
      />
    )
  },

  _renderRow(rowData: string, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
    var rowHash = Math.abs(hashCode(rowData));
    var imgSource = THUMB_URLS[rowHash % THUMB_URLS.length];
    return (
      <TouchableHighlight onPress={() => {
          this._pressRow(rowID);
          highlightRow(sectionID, rowID);
        }}>
        <View style={styles.row}>
          {/*<Image style={styles.thumb} source={imgSource} />*/}
          <Text style={styles.text}>
            {rowData + ' - ' + LOREM_IPSUM.substr(0, rowHash % 301 + 10)}
          </Text>
        </View>
      </TouchableHighlight>
    );
  },

  _genRows(pressData: {[key: number]: boolean}): Array<string> {
    var dataBlob = [];
    for (var ii = 0; ii < 100; ii++) {
      var pressedText = pressData[ii] ? ' (pressed)' : '';
      dataBlob.push('Row ' + ii + pressedText);
    }
    return dataBlob;
  },

  _pressRow(rowID: number) {
    this._pressData[rowID] = !this._pressData[rowID];
    this.setState({dataSource: this.state.dataSource.cloneWithRows(
      this._genRows(this._pressData)
    )});
  },

  _renderSeperator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: adjacentRowHighlighted ? 4 : 1,
          backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
        }}
      />
    );
  }
});

var THUMB_URLS = [
  // require('./Thumbnails/like.png'),
  // require('./Thumbnails/dislike.png'),
  // require('./Thumbnails/call.png'),
  // require('./Thumbnails/fist.png'),
  // require('./Thumbnails/bandaged.png'),
  // require('./Thumbnails/flowers.png'),
  // require('./Thumbnails/heart.png'),
  // require('./Thumbnails/liking.png'),
  // require('./Thumbnails/party.png'),
  // require('./Thumbnails/poke.png'),
  // require('./Thumbnails/superlike.png'),
  // require('./Thumbnails/victory.png'),
  ];

var LOREM_IPSUM = 'Lorem ipsum dolor sit amet, ius ad pertinax oportere accommodare, an vix civibus corrumpit referrentur. Te nam case ludus inciderint, te mea facilisi adipiscing. Sea id integre luptatum. In tota sale consequuntur nec. Erat ocurreret mei ei. Eu paulo sapientem vulputate est, vel an accusam intellegam interesset. Nam eu stet pericula reprimique, ea vim illud modus, putant invidunt reprehendunt ne qui.';

/* eslint no-bitwise: 0 */
var hashCode = function(str) {
  var hash = 15;
  for (var ii = str.length - 1; ii >= 0; ii--) {
    hash = ((hash << 5) - hash) + str.charCodeAt(ii);
  }
  return hash;
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 10,
    top: 0,
    marginTop: 30,
    padding: 10,
    height: 50,
    backgroundColor: '#22a3ed',
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    color: 'white'
  },
  list: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    marginTop: -20
  },
  item: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 18
  },
  row: {
    flexDirection: 'row',
    padding: 10,
  },
  text: {
    flex: 1
  }
})

export default List
