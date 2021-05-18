import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {ReportList} from "../lists/ReportList";


function Item({title, description, status,created_at, author, event}) {
    let label;
    if (status === "accepted") {
        label =  <View style={styles.green_label}><Text style={styles.status}>Принят</Text></View>
    } else {
        label = <View style={styles.red_label}><Text style={styles.status}>Отклонён</Text></View>
    }
    return (
        <View style={styles.item}>
            {label}
            <View style={styles.body}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}> {description} </Text>
                <Text style={styles.event}>Событие: {event} </Text>
                <View style={styles.footer}>
                    <Text style={styles.author}>Автор: {author};</Text>
                    <Text style={styles.created_at}> Создан: {created_at}</Text>
                </View>
            </View>
        </View>
    );
}

export default class ScreenProfile extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={ReportList}
                    renderItem={({ item }) =>
                            <Item title={item.title}
                                  description={item.description}
                                  status = {item.status}
                                  author = {item.author}
                                  event = {item.event}
                                  key = {item.key}
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
    item: {
        marginVertical: 5,
        marginHorizontal: 10,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#ccc',
        flex: 1
    },
    green_label: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        fontSize: 17,
        backgroundColor: '#009A95',
    },
    red_label: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        fontSize: 17,
        backgroundColor: '#C84267',
    },
    status: {
        padding: 5,
        fontSize: 15,
        color: 'white',
    },
    body: {
        padding: 5,
    },
    title: {
        fontSize: 18
    },
    header: {
        flexDirection: 'row'
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        opacity: 0.4,
        fontSize: 14
    },
    description: {
      fontSize:15,
    },
    event: {
        opacity: 0.4
    }
});
