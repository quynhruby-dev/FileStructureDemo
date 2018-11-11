import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import PropTypes from 'prop-types'

import { Styles } from 'common'

const ArticleItem = (props) => {
    const { image_url, category, date, title, author, onPress } = props
    return (
        <TouchableOpacity activeOpacity = {0.8} onPress = {onPress} >
            <View style={styles.container}>
                <View style = {styles.imageView}>
                    <Image source = {{uri: image_url}} style = {styles.image} />
                </View>
                <View style = {styles.contentView}>
                    <View style = {styles.infoView}>
                        <View style = {styles.categoryView}>
                            {
                               category.image_url && 
                               <Image style = {styles.categoryImage} source = {{uri: category.image_url}} />
                            }
                            <Text style = {styles.categoryText}>{category.name}</Text>
                        </View>
                        <Text style = {styles.dateText}>{date}</Text>
                    </View>
                    <View style = {styles.headingView}>
                        <Text style = {styles.headingText}>{title}</Text>
                    </View>
                    <View style = {styles.authorView}>
                        <Image style = {styles.authorAvator} source = {{uri: author.avatar}} />
                        <Text numberOfLines = {2} style = {styles.authorName}>{author.name}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

ArticleItem.propTypes = {
    image_url: PropTypes.string, 
    category: PropTypes.object, 
    date: PropTypes.string, 
    title: PropTypes.string, 
    author: PropTypes.object
}

ArticleItem.defaultProps = {
    image_url: undefined, 
    category: {
        image_url: undefined,
        name: undefined
    }, 
    date: undefined, 
    title: undefined, 
    author: {
        avatar: undefined,
        name: undefined
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#D2D2D2',
        paddingVertical: 15,
        ...Styles.Common.RowCenterLeft,
    },
    imageView: {
        width: 138, height: 92, 
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.56,
        shadowRadius: 10,
        elevation: 1,
    },
    image: {
        width: null,
        height: null,
        flex: 1,
        borderRadius: 6
    },
    contentView: {
        flex: 1,
        paddingLeft: 15
    },
    infoView: {
        ...Styles.Common.RowCenterBetween
    },
    categoryView: {
        ...Styles.Common.RowCenterLeft
    },
    categoryImage: {
        width: 16,
        height: 16,
        marginRight: 10,
        tintColor: '#000'
    },
    dateText: {
        fontSize: 13,
        color: '#999'
    },
    headingView: {
        marginTop: 10,
    },
    headingText: {
        fontSize: 16,
        lineHeight: 18,
        fontWeight: '500',
    },
    authorView: {
        marginTop: 10,
        ...Styles.Common.RowCenterLeft
    },
    authorAvator: {
        width: 16,
        height: 16,
        marginRight: 10
    },
    authorName: {
        color: '#3C4858',
        fontSize: 12
    }
});

export default ArticleItem;