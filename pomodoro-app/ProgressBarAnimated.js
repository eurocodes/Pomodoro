import React, { Component } from 'react'
import { Animated, Dimensions, Easing, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'

class ProgressBar extends Component {

    state = {
        percent: new Animated.Value(0)
    }

    componentDidMount() {
        this.startAnimation()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.timeRemaining > this.props.timeRemaining) {
            this.setState({ percent: new Animated.Value(0) }, this.startAnimation)
        }
    }

    startAnimation = () => {
        this.animation = Animated.timing(
            this.state.percent,
            {
                toValue: 100,
                duration: this.props.timeRemaining,
                easing: Easing.linear,
                useNativeDriver: true,
            },
        )

        this.animation.start()
    }

    render() {
        const { percent } = this.state
        const { width } = Dimensions.get('window')
        return (
            <Animated.View
                style={[
                    styles.progress,
                    {
                        transform: [{
                            scaleX: percent.interpolate({
                                inputRange: [0, 100],
                                outputRange: [0, width],
                            })
                        }]
                    },
                ]}
            />
        )
    }

}

ProgressBar.propTypes = {
    timeRemaining: PropTypes.number,
    timeTotal: PropTypes.number,
    isRunning: PropTypes.bool,
}

const styles = StyleSheet.create({
    progress: {
        height: 10,
        width: 2,
        backgroundColor: 'blue',
    },
})

export default ProgressBar;