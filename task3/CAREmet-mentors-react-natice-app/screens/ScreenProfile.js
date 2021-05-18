import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import TouchableHighlight from "react-native-web/dist/exports/TouchableHighlight";

export default class ScreenProfile extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.info_label}> Имя фамилия </Text>
                <Text style={styles.full_name}>Артур Белякнов</Text>
                <Text style={styles.info_label}> Информация </Text>
                <Text style={styles.full_name}> Дата Рождения: 03.12.98 </Text>
                <Text style={styles.info_label}> Работа </Text>
                <Text style={styles.full_name}> Куратор: Г.Алматы </Text>
                <Text style={styles.full_name}> Должность: Руководитель </Text>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('Наставники');
                    }} >
                    <Text style={styles.logout }> Выход </Text>
                </TouchableOpacity>
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
    logout: {
        backgroundColor: '#F4F5F6',
        fontSize: 20,
        color: '#C84267',
        marginBottom: 5,
        padding: 5,
        textAlign: 'center'
    },
    full_name: {
        padding: 10,
        fontSize: 16,
    }
});
