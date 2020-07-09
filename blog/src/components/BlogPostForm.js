import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ( { onSubmit, initValues }) => {
    const [title, setTitle] = useState(initValues.title);
    const [content, setContent] = useState(initValues.content);

    return <View>
        <Text style={styles.label}>Enter Title: </Text>
        <TextInput 
            style={styles.input} 
            value={title} 
            onChangeText={(text) => setTitle(text)}
        />
        <Text style={styles.label}>Enter Content: </Text>
        <TextInput 
            style={styles.input} 
            value={content} 
            onChangeText={(content) => setContent(content)}
        />
        <Button 
            title="Save Blog Post"
            onPress={() => onSubmit(title, content)}
        />
    </View>
}

BlogPostForm.defaultProps = {
    initValues: {
        title: '',
        content: ''
    }
};
const styles = StyleSheet.create({
    input: {
        fontSize: 19,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        margin: 5,
        padding: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 5
    }
});

export default BlogPostForm;