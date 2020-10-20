import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TextInput, Image} from 'react-native';

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);
export const Page1 = ({navigation}) => {
    return(
        <ScreenContainer>
            <Text></Text>
        </ScreenContainer>
    )
}
export const Page3 = ({navigation}) => {
    return(
        <ScreenContainer>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium neque eget feugiat mollis. Nam ut dolor metus. Praesent ornare molestie diam sit amet maximus. Vivamus volutpat ante sed nibh accumsan, ut eleifend ipsum gravida. Nunc rhoncus tortor vitae ante tempor, quis pulvinar nunc dignissim. Curabitur laoreet venenatis leo, non iaculis risus sagittis non. Morbi at blandit mauris. Maecenas enim velit, blandit vitae condimentum sed, scelerisque vel libero. Phasellus interdum ligula odio, in mollis nunc euismod ac. Morbi porta tincidunt massa ut auctor. Suspendisse id libero in urna egestas fringilla. Phasellus tristique quis risus at ultricies. Donec congue lobortis dui.
                Integer viverra fermentum erat at volutpat. Vestibulum ullamcorper augue et sodales imperdiet. Donec at pellentesque ipsum. Curabitur id ultricies erat. Vivamus dignissim magna lectus, eget bibendum ipsum dictum ac. Sed quam nulla, condimentum et fringilla non, varius in justo. Vivamus non gravida augue. Praesent quis nibh ultricies, rhoncus erat ut, varius erat. Proin ut sollicitudin est, eget dignissim enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis turpis in tincidunt commodo.</Text>
        </ScreenContainer>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputField: {
        borderWidth: 1,
        margin: 10,
        padding: 10,
        height: 40, width: 100
    }
});
