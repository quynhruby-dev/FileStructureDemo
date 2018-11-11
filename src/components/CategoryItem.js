import React from "react";
import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from "react-native";
import PropTypes from 'prop-types'

import { Styles } from 'common'
const {width, height} = Dimensions.get('window');

const CategoryItem = (props) => {
    const { image_url, title, subTitle, onPress } = props
    return (
        <TouchableOpacity activeOpacity = {0.8} onPress = {onPress} >
            <View style={styles.container}>
                <Image source = {{uri: image_url}} style = {styles.image} />
                <View style = {styles.contentView}>
                    <Text numberOfLines = {2} style = {styles.headingText}>{title}</Text>
                    <Text numberOfLines = {2} style = {styles.subHeadingText}>{subTitle}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

CategoryItem.propTypes = {
    image_url: PropTypes.string, 
    category: PropTypes.object, 
    title: PropTypes.string, 
    subTitle: PropTypes.string
}

CategoryItem.defaultProps = {
    image_url: undefined, 
    title: undefined, 
    subTitle: undefined
}


export default CategoryItem;
const initWidth = width - (Styles.Common.paddingHorizontal * 4)
const initHeight = (117/300) * initWidth
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: Styles.Common.paddingHorizontal
    },
    image: {
        width: initWidth,
        height: initHeight,
        resizeMode: 'cover',
        borderRadius: 6,
    }, 
    contentView: {
        position: 'absolute',
        flex: 1,
        top: 0, left: 0, bottom: 0, right: 0,
        paddingHorizontal: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.56)',
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.56,
        shadowRadius: 10,
        elevation: 1,
        ...Styles.Common.ColumnCenter
    },
    headingText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    subHeadingText: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    }
});