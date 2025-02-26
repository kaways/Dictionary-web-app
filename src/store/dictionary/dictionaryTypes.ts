export interface WordDefinition {
    word: string;
    phonetic: string;
    phonetics: Array<{
      text: string;
      audio: string;
    }>;
    meanings: Array<{
      partOfSpeech: string;
      definitions: Array<{
        definition: string;
        example?: string;
        synonyms?: string[];
        antonyms?: string[];
      }>;
    }>;
  }
  
  export type ApiResponse = WordDefinition[];

  export interface DictionaryState {
    data: ApiResponse | null;
    loading: boolean;
    error: string | null;
  }