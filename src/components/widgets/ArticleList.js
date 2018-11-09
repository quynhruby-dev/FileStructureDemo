import React, { Component } from "react";
import { 
    View,
    Dimensions,
    Alert
} from "react-native";

import { Loading, ArticleItem } from 'components'
import { BlogAPI } from 'services'

const {width, height} = Dimensions.get('window');

class ArticleList extends Component {
    state = {
        data: [],
        loading: true
    }

    componentWillMount() {
        BlogAPI.getNews().then((article_list) => {
            this.setState({
                data: article_list,
                loading: false
            })
        })
        .catch((e) => console.log(e))
    }

    onPress(articleID) {
        Alert.alert(
            `Article ID: ${articleID}`,
            `Pressed`,
            [
              {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
    }

    render() {
        const { data, loading } = this.state
        if (loading) {
            return <Loading />
        }
        else {
            return (
                <View>
                        {
                            data.map((item) => {
                                return <ArticleItem {...item} key = {item.id} onPress = {() => this.onPress(item.id)}/>
                            })
                        }
                </View>
            );
        }   
    }
}
export default ArticleList;
