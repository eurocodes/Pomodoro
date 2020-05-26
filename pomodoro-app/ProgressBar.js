import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'

const ProgressBar = props => {
    const { width } = Dimensions.get('window')
    const percent = 1 - (props.timeRemaining / props.timeTotal)
    return (
        <View style={[styles.progress, { width: percent * width }]} />
    )
}

ProgressBar.propTypes = {
    timeRemaining: PropTypes.number,
    timeTotal: PropTypes.number,
    isRunning: PropTypes.bool,
}

const styles = StyleSheet.create({
    progress: {
        height: 10,
        width: 100,
        backgroundColor: 'blue',
    },
})

export default ProgressBar;