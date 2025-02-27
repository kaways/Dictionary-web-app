
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { DictionarySearch } from './DictionarySearch';


export const DictionaryContent = () => {
    const { data } = useSelector((state: RootState) => state.dictionary);
    const { meanings, word, phonetic } = data?.[0] || {};
    const audio = new Audio("https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3");

    const start = () => {
        audio.play()
    }

    return (
        <>
            <DictionarySearch />

            {data?.[0] && (
                <div className="flex flex-col mt-10 gap-5">
                    <div>
                        <h1>{word}</h1>
                        <em className="text-[#A445ED]">{phonetic}</em>
                        < div >
                            <button onClick={start}>Play</button>
                        </div >
                    </div>

                    {meanings?.map((meaning, index) => {
                        return (
                            <div className="flex flex-col mb-5 gap-5">
                                <b>{meaning?.partOfSpeech}</b>
                                <p>Meaning</p>

                                {meaning?.definitions?.map((definition) => {
                                    return (
                                        <>
                                            <li className="ml-5">{definition.definition}</li>
                                            {definition.example && (
                                                <p className="ml-10">"{definition.example}"</p>
                                            )}
                                        </>
                                    );
                                })}

                                {index === 0 && (
                                    <div className="flex gap-4">
                                        <p>Synonyms</p>
                                        <strong className="flex gap-1 text-[#A445ED]">
                                            {meanings[0].synonyms?.map((synonym) => {
                                                return (<div> {synonym}</div>);
                                            })}
                                        </strong>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div >
            )}
        </>
    );

}

export default DictionaryContent;
