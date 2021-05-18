import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default class ScreenMentorDetails extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.info_label}> Имя фамилия </Text>
                <Text style={styles.full_name}>{navigation.state.params.first_name} {navigation.state.params.last_name}</Text>
                <Text style={styles.info_label}> Возраст </Text>
                <Text style={styles.full_name}> {navigation.state.params.age} лет</Text>
                <Text style={styles.info_label}> Работа </Text>
                <Text style={styles.full_name}> Место работы: {navigation.state.params.work}</Text>
                <Text style={styles.full_name}> Должность: {navigation.state.params.workPosition}</Text>
                <Text style={styles.info_label}> Интересы </Text>
                <Text style={styles.full_name}> Хобби: {navigation.state.params.hobby}</Text>
                <Text style={styles.full_name}> О себе: {navigation.state.params.about}</Text>
                <Text style={styles.info_label}> Контактная информация </Text>
                <Text style={styles.full_name}> Телефон: {navigation.state.params.phone_number}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    info_label: {
        backgroundColor: '#F4F5F6',
        fontSize: 23,
        marginBottom: 5,
        padding: 5,
        opacity: 0.5
    },

    full_name: {
        padding: 10,
        fontSize: 16,
    }
});
