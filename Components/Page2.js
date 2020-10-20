import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    Alert,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import firebase from 'firebase';

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);

export default class AddCar extends React.Component {
    state = {
        name: '',
        rammenummer: '',
        længde: '',
        bredde: '',
    };

    handleBrandChange = text => this.setState({ name: text });

    handleModelChange = text => this.setState({ rammenummer: text });

    handleYearChange = text => this.setState({ længde: text });

    handleLicensePlateChange = text => this.setState({ bredde: text });

    handleSave = () => {
        const { name, rammenummer, længde, bredde } = this.state;
        try {
            const reference = firebase
                .database()
                .ref('/rammemodel/')
                .push({ name: name, rammenummer: rammenummer, længde: længde, bredde: bredde });
            Alert.alert(`Saved`);
            this.setState({
                name: '',
                rammenummer: '',
                længde: '',
                bredde: '',
            });
        } catch (error) {
            Alert.alert(`Error: ${error.message}`);
        }
    };

    render() {
        const { name, rammenummer, længde, bredde } = this.state;
        return (
            <ScreenContainer>
                <Text>Create account</Text>
                <TextInput
                    placeholder="Name"
                    value={name}
                    onChangeText={this.handleBrandChange}
                    style={styles.inputField}
                />
                <TextInput
                    placeholder="Rammenummer"
                    value={rammenummer}
                    onChangeText={this.handleModelChange}
                    style={styles.inputField}
                />
                <TextInput
                    placeholder="Længde"
                    value={længde}
                    onChangeText={this.handleYearChange}
                    style={styles.inputField}
                />
                <TextInput
                    placeholder="Bredde"
                    value={bredde}
                    onChangeText={this.handleLicensePlateChange}
                    style={styles.inputField}
                />
                <Button title="add something" onPress={this.handleSave}/>
            </ScreenContainer>
        );
    }
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
