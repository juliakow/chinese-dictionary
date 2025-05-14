import React, { useState } from 'react';
import { View, TextInput, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { searchCharacters } from '../utils/api';
import { cn } from 'nativewind';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Character[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigation = useNavigation();

  const handleSearch = async () => {
    if (!query.trim()) return;
    setIsSearching(true);
    try {
      const data = await searchCharacters(query);
      setResults(data);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <View className="flex-1 bg-gradient-to-b from-blue-50 to-white p-6">
      {/* Nagłówek z gradientem */}
      <View className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-6 mb-6 shadow-lg">
        <Text className="text-3xl font-bold text-white text-center">汉字词典</Text>
        <Text className="text-white text-center mt-2">Chinese Character Dictionary</Text>
      </View>

      <View className="flex-row mb-6">
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search Chinese character..."
          placeholderTextColor="#9CA3AF"
          className="flex-1 border-2 border-gray-200 rounded-xl p-4 text-lg bg-white shadow-sm"
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity
          onPress={handleSearch}
          className="ml-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-4 justify-center items-center w-16 shadow-lg"
          disabled={isSearching}
        >
          {isSearching ? (
            <ActivityIndicator color="white" />
          ) : (
            <Image source={require('../assets/search-icon.png')} className="w-6 h-6" />
          )}
        </TouchableOpacity>
      </View>

      <ScrollView className="mb-6">
        {results.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('Details', { character: item })}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-5 mb-4 shadow-md border border-white/30"
          >
            <View className="flex-row items-center">
              <Text className="text-4xl font-bold text-gray-900 mr-4">{item.character}</Text>
              <View>
                <Text className="text-blue-600 font-medium">{item.pinyin}</Text>
                <Text className="text-gray-600" numberOfLines={1}>
                  {item.definition}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View className="flex-row justify-around bg-white rounded-full p-3 shadow-xl">
        <TouchableOpacity className="p-3">
          <Image source={require('../assets/home-icon.png')} className="w-6 h-6" />
        </TouchableOpacity>
        <TouchableOpacity 
          className="p-3"
          onPress={() => navigation.navigate('Favorites')}
        >
          <Image source={require('../assets/favorite-icon.png')} className="w-6 h-6" />
        </TouchableOpacity>
        <TouchableOpacity 
          className="p-3"
          onPress={() => navigation.navigate('Flashcards')}
        >
          <Image source={require('../assets/flashcards-icon.png')} className="w-6 h-6" />
        </TouchableOpacity>
      </View>
    </View>
  );
}