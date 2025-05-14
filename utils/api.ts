export interface Character {
    character: string;
    pinyin: string;
    definition: string;
    strokes?: number;
    radical?: string;
    examples?: string[];
  }
  
  export const searchCharacters = async (query: string): Promise<Character[]> => {
    try {
      const response = await fetch(
        `http://ccdb.hemiola.com/characters/string/${encodeURIComponent(query)}?fields=kDefinition,kMandarin,kTotalStrokes,kRSUnicode,kExamples`
      );
      const data = await response.json();
      return data.map((item: any) => ({
        character: item.character,
        pinyin: item.kMandarin,
        definition: item.kDefinition,
        strokes: item.kTotalStrokes,
        radical: item.kRSUnicode,
        examples: item.kExamples?.split('|') || []
      }));
    } catch (error) {
      console.error('API error', error);
      return [];
    }
  };