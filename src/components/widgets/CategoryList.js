import React, { Component } from "react";
import { 
    View,
    Dimensions,
    Alert
} from "react-native";

import { Loading, CategoryItem } from 'components'
import { BlogAPI } from 'services'
import Colors from "../../common/Colors";
import Styles from "../../common/Styles";

import Language from 'Language'

const {width, height} = Dimensions.get('window');

class CategoryList extends Component {
    state = {
        data: [],
        loading: true
    }

    componentWillMount() {
        BlogAPI.getCategoryList().then((category_list) => {
            this.setState({
                data: category_list,
                loading: false
            })
        })
        .catch((e) => console.log(e))
    }

    onPress(categoryID) {
        Alert.alert(
            `Category ID: ${categoryID}`,
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
                <View style = {{marginTop: Styles.Common.paddingHorizontal}}>
                        {
                            data.map((item) => {
                                return <CategoryItem {...item} key = {item.id} onPress = {() => this.onPress(item.id)}/>
                            })
                        }
                </View>
            );
        }   
    }
}
export default CategoryList;
