import React from 'react'
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

export default function CategoryListItem(props) {
    const { category, onPress, image } = props;
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.title}>{category.name}</Text>
                <Image style={styles.categoryImage} source={image} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    categoryImage: {
        width: 100,
        height: 100,
    },
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        marginBottom: 16,
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    }
});