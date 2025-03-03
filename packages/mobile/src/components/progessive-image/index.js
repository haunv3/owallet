import React from 'react';
import { View, StyleSheet, Animated, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  },
  container: {
    backgroundColor: '#e1e4e8',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class ProgressiveImage extends React.Component {
  thumbnailAnimated = new Animated.Value(0);
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  imageAnimated = new Animated.Value(0);

  handleThumbnailLoad = () => {
    Animated.timing(this.thumbnailAnimated, {
      toValue: 1
    }).start();
  };

  onImageLoad = () => {
    this.setState({
      loading: false
    });
    Animated.timing(this.imageAnimated, {
      toValue: 1
    }).start();
  };

  render() {
    const { thumbnailSource, source, style, ...props } = this.props;

    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.state.loading ? '#e1e4e8' : '#fff' }
        ]}
      >
        {this.state.loading ? (
          <ActivityIndicator style={{ marginTop: 20 }} />
        ) : null}
        <Animated.Image
          {...props}
          source={thumbnailSource}
          style={[
            style,
            {
              opacity: this.thumbnailAnimated
            }
          ]}
          onLoad={this.handleThumbnailLoad}
          blurRadius={1}
        />

        <Animated.Image
          {...props}
          source={source}
          style={[styles.imageOverlay, { opacity: this.imageAnimated }, style]}
          onLoad={this.onImageLoad}
        />
      </View>
    );
  }
}

export default ProgressiveImage;
