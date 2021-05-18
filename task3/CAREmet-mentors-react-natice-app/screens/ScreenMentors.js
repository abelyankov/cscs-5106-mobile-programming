import React from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import {MentorList} from '../lists/MentorList'


function Item({first_name, last_name, age, about}) {
    return (
        <View style={styles.item}>
            <Text style={styles.full_name}>{first_name} {last_name} <Text style={styles.age}>({age}лет)</Text> </Text>
            <Text style={styles.about}>О себе: {about} </Text>
        </View>
    );
}

export default class ScreenMentors extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={MentorList}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('MentorDetails', {
                                    key: item.key,
                                    first_name: item.first_name,
                                    last_name: item.last_name,
                                    age: item.age,
                                    phone_number: item.phone_number,
                                    work: item.work,
                                    workPosition: item.workPosition,
                                    hobby: item.hobby,
                                    about: item.about

                                });
                            }}>
                        <Item first_name={item.first_name}
                                                    last_name={item.last_name}
                                                    age = {item.age}
                                                    about = {item.about}/>
                        </TouchableOpacity>
                    }
                    keyExtractor={item =>item.key}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#ccc'
    },
    full_name: {
        fontSize: 18
    },
    age: {
        fontSize: 17,
        opacity: 0.5
    },
    about: {
        marginTop: 5,
        fontSize: 15
    }
});
