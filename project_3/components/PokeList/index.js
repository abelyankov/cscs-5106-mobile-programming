
import React, { PureComponent } from 'react';
import PokeCard from '../PokeCard';
import {  FlatList, ActivityIndicator } from 'react-native';
import styles from './styles';

export default class PokeList extends PureComponent {
    
    state = {
        pokeList: [],
        loading: true
    }
    static navigationOptions = {
        title: 'List of Pokemon'
    }
   
    async componentDidMount() {
        try {
            const pokemonApiCall = await fetch('https://pokeapi.co/api/v2/pokemon/');
            const pokemon = await pokemonApiCall.json();
            this.setState({pokeList: pokemon.results, loading: false});
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
    }
    render() {

        const { pokeList, loading } = this.state;
        const { navigation } = this.props;
        if(!loading) {
            return <FlatList 
                    data={pokeList}
                    renderItem={(data) => <PokeCard {...data.item} navigation={navigation} />}
                    keyExtractor={(item) => item.name} 
                    />
        } else {
            return <ActivityIndicator />
        }
    }
}