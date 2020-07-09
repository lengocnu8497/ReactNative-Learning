import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    },[]);

    if (!result) {
        return null;
    }

    console.log(result);
    return (
        <View >
            <Text style={styles.name}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>   
                            <Image style={styles.image} source={{ uri: item }} />
                        </View>
                    );
                }}
            />
            <Text>Phone: {result.phone} </Text>
            <Text>Adress: {result.location.address1}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
        fontWeight: '100'
    },
    image: {
        height: 200,
        width: 250,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center'
    }
});

export default ResultsShowScreen;