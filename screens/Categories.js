import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';
import Iphone from '../assets/iphone.png'
import Ipad from '../assets/ipad.png'
import Macbook from '../assets/macbook.png'
import Watch from '../assets/watch.png'
import Imac from '../assets/imac.png'
import Airpod from '../assets/airpod.png'

export default class Categories extends React.Component {
    static navigationOptions = {
        title: 'Home'
    };
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                { id: 1, name: 'Iphone', image: Iphone },
                { id: 2, name: 'Macbook', image: Macbook },
                { id: 3, name: 'Ipad', image: Ipad },
                { id: 4, name: 'Watch', image: Watch },
                { id: 5, name: 'iMac', image: Imac },
                { id: 6, name: 'Accessoires', image: Airpod },
            ]
        }
    }

    render() {
        const { navigation } = this.props;
        const { categories } = this.state;
        return (
            <FlatList
                data={categories}
                numColumns={2}
                renderItem={({ item }) =>
                    <View style={styles.wrapper}>
                        <CategoryListItem
                            category={item}
                            onPress={() =>
                                navigation.navigate('Category',
                                    { categoryName: item.name })
                            }
                            image={item.image}
                        />
                    </View>
                }
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={styles.container}
            />

        );
    }
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 16,
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 16,
    }
});
