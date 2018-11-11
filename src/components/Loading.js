import React from "react";
import { 
    View,
    StyleSheet,
    ActivityIndicator
} from "react-native";

const Loading = (props) => (
    <View style={styles.container}>
        <ActivityIndicator />
    </View>
    )
export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});