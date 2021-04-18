/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 * BELYANKOV ARTHUR 20MD0112
 */

 import React, { Component } from "react";
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   FlatList,
   AsyncStorage,
   Button,
   TextInput,
   Keyboard,
   Platform
 } from "react-native";
 
 const isAndroid = Platform.OS == "android";
 const viewPadding = 10;
 
 export default class TodoList extends Component {
   state = {
     tasks: [],
     text: ""
   };
 
   changeTextHandler = text => {
     this.setState({ text: text });
   };
 
   addTask = () => {
     let notEmpty = this.state.text.trim().length > 0;
 
     if (notEmpty) {
       this.setState(
         prevState => {
           let { tasks, text } = prevState;
           return {
             tasks: tasks.concat({ key: tasks.length, text: text }),
             text: ""
           };
         },
         () => Tasks.save(this.state.tasks)
       );
     }
   };
 
   deleteTask = i => {
     this.setState(
       prevState => {
         let tasks = prevState.tasks.slice();
 
         tasks.splice(i, 1);
 
         return { tasks: tasks };
       },
       () => Tasks.save(this.state.tasks)
     );
   };
 
   componentDidMount() {
     Keyboard.addListener(
       isAndroid ? "keyboardDidShow" : "keyboardWillShow",
       e => this.setState({ viewPadding: e.endCoordinates.height + viewPadding })
     );
 
     Keyboard.addListener(
       isAndroid ? "keyboardDidHide" : "keyboardWillHide",
       () => this.setState({ viewPadding: viewPadding })
     );
 
     Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
   }
 
   render() {
     return (
       <View
         style={[styles.container]}
       >
         <FlatList
           style={styles.list}
           data={this.state.tasks}
           renderItem={({ item, index }) =>
             <View>
               <View style={styles.listItemCont}>
                 <Text style={styles.listItem}>
                   {item.text}
                 </Text>
                 <Button title="🗑" onPress={() => this.deleteTask(index)} />
               </View>
               <View style={styles.hr} />
             </View>}
         />
         <TextInput
           style={styles.textInput}
           onChangeText={this.changeTextHandler}
           onSubmitEditing={this.addTask}
           value={this.state.text}
           placeholder="Add new task"
           returnKeyType="done"
           returnKeyLabel="done"
         />
       </View>
     );
   }
 }
 
 let Tasks = {
   convertToArrayOfObject(tasks, callback) {
     return callback(
       tasks ? tasks.split("||").map((task, i) => ({ key: i, text: task })) : []
     );
   },
   convertToStringWithSeparators(tasks) {
     return tasks.map(task => task.text).join("||");
   },
   all(callback) {
     return AsyncStorage.getItem("TASKS", (err, tasks) =>
       this.convertToArrayOfObject(tasks, callback)
     );
   },
   save(tasks) {
     AsyncStorage.setItem("TASKS", this.convertToStringWithSeparators(tasks));
   }
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     backgroundColor: "#f6f4f0",
     padding: viewPadding,
     paddingTop: 60,
     paddingBottom: 40
   },
   list: {
     width: "100%",
   },
   listItem: {
     marginTop: 10,
     marginBottom: 10,
     fontSize: 18
   },
   hr: {
     height: 0,
     backgroundColor: "gray"
   },
   listItemCont: {
    backgroundColor: "white",
     flexDirection: "row",
     alignItems: "center",
     justifyContent: "space-between",
     padding: 10,
     marginTop: 4,
     borderRadius: 10
   },
   textInput: {
     zIndex: 10,
     height: 50,
     paddingRight: 10,
     paddingLeft: 10,
     backgroundColor: "white",
     borderRadius: 10,
     width: "100%"
   }
 });
 
 AppRegistry.registerComponent("TodoList", () => TodoList);
