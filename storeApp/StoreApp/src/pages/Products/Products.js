import React from 'react';
import { FlatList } from 'react-native';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';

const Products = ({navigation}) => {
    const { data, loading, error } = useFetch(Config.API_URL);

    const handleProductSelect = id => {
        navigation.navigate('DetailPage', {id});
    }

    renderProduct = ({ item }) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)}/>;

    if (error) {
        return <Error />
    }

    if (loading) {
        return <Loading />
    }

    return (
        <FlatList data={data} renderItem={renderProduct} />
    )
}

export default Products;