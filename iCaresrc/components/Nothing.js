import React, { PureComponent } from 'react';
import { View, UIManager } from 'react-native'
import Animation from 'lottie-react-native';
export class Nothing extends PureComponent {
  componentWillMount() {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

  }
  componentDidMount = () => {
    this.animation.play();
  }
  
  render() {
    return (
      <View style={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
        <Animation
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: this.props.width || 120,
            height: this.props.height || 120,
            alignSelf: 'center'
          }}
          loop={this.props.loop}
          source={this.props.anim}
        />
      </View>
    )
  }
}
