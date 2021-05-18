import React from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import { ChatList } from "../lists/ChatList";
import {Ionicons} from "@expo/vector-icons";

function Item({title, message_count, chat_members, created_at, last_answer, last_answer_author}) {
    return (
        <View style={styles.item}>
            <View style={styles.body}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.author}>{last_answer_author}:</Text>
                <Text style={styles.answer}>{last_answer} </Text>
                <View style={styles.footer}>
                    <Ionicons name={'chatbubble-outline'} size={15} color={'darkgrey'}/>
                    <Text style={styles.message_count}> {message_count}</Text>
                    <Ionicons name={'people-outline'} size={15} color={'darkgrey'}/>
                    <Text style={styles.chat_members}> {chat_members} </Text>
                    <Text style={styles.created_at}>Создан: {created_at}</Text>
                </View>
            </View>
        </View>
    );
}

export default class ScreenHome extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={ChatList}
                    renderItem={({ item }) =>
                        <Item title={item.title}
                                    message_count={item.message_count}
                                    chat_members = {item.chat_members}
                                    last_answer = {item.last_answer}
                                    last_answer_author = {item.last_answer_author}
                                    created_at={item.created_at}/>
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
    body: {
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#ccc'
    },
    title: {
        fontSize: 19,
        marginBottom: 5,
    },
    author: {
        fontSize: 15
    },
    answer: {
        fontSize: 15
    },
    last_answer: {
        opacity: 0.6
    },
    footer: {
        marginTop: 5,
        flex: 1,
        flexDirection: 'row',
        opacity: 0.4,
        fontSize: 14
    },
    message_count: {
        marginRight: 5,
    },
});
