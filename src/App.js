import React, { Component } from "react";
import { 
    StatusBar,
    View,
    ScrollView,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    Alert
} from "react-native";

import { Styles, Images, Colors, Configs } from 'common'
import { AppHelper } from 'utils'
import { CategoryList, ArticleList } from 'components/widgets'

const {width, height} = Dimensions.get('window');
class App extends Component {
    state = {
        widgets: [],
        loading: true
    }

    componentWillMount() {
        this.setState({
            widgets: Configs.HOME_CONFIG.widgets || []
        })
    }

    renderWidgets(widget) {
        switch (widget.type) {
            case "CATEGORY_LIST":
                return <CategoryList widget = {widget} key={AppHelper.newGuid() }/>

            case "ARTICLE_LIST":
                return <ArticleList widget = {widget} key={AppHelper.newGuid() }/>
            
            default:
                break;
        }
    }

    render() {
        console.log('dataWidgets:', this.state.dataWidgets)
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style = {styles.headerBackgroundView}>
                    <Image source = {Images.headerBackground} style = {{width: null, height: null, flex: 1}} />
                    <View style = {styles.headingView}>
                        <Text style = {styles.headingText}>A Place for Entrepreneurs to Share</Text>
                    </View>
                </View>
                <ScrollView style = {styles.contentWrapView} contentContainerStyle = {{paddingHorizontal: Styles.Common.paddingHorizontal, paddingBottom: 20, backgroundColor: Colors.foreground}}>
                    {
                        this.state.widgets.map( widget => {
                            return this.renderWidgets(widget)
                        })
                    }
                </ScrollView>
            </View>
        );  
    }
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center'
    },
    headerBackgroundView: {
        width: width,
        height: '35%'
    },
    headingView: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        paddingHorizontal: 60
    },
    headingText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    contentWrapView: {
        width: width - Styles.Common.paddingHorizontal * 2,
        height: '70%',
        position: 'absolute',
        bottom: 20,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 1,
        borderRadius: 6
    }
});