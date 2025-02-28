
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { DictionarySearch } from './DictionarySearch';
import errorFace from '@/assets/images/error-face.png'
import { CirclePlay } from 'lucide-react';

export const DictionaryContent = () => {
    const { data, error } = useSelector((state: RootState) => state.dictionary);
    const { meanings, word, phonetic, phonetics, sourceUrls } = data?.[0] || {};
    interface Phonetic {
        text: string;
        audio: string;
    }

    const playAudio = (phonetics: Phonetic[]) => {
        phonetics.some((phonetic) => {
            if (phonetic?.audio.trim() !== "") {
                const audio = new Audio(phonetic?.audio);
                audio.play();
                return true;
            }
        });
    }

    return (
        <>
            <DictionarySearch />

            {data?.[0] && (
                <div className="flex flex-col mt-8 gap-5">
                    <div className='flex justify-between'>
                        <div className='flex flex-col'>
                            <h1>{word}</h1>
                            <em className="text-[#A445ED]">{phonetic}</em>
                        </div>

                        <div>
                            <CirclePlay className='size-20 mt-2 hover:cursor-pointer opacity-40 hover:opacity-90' onClick={() => phonetics && playAudio(phonetics)} color="#a445ed" strokeWidth={0.5} />
                        </div >
                    </div>

                    {meanings?.map((meaning, index) => {
                        return (
                            <div className="flex flex-col mb-5 gap-5">
                                <div className='flex items-center gap-5'>
                                    <b><i>{meaning?.partOfSpeech}</i></b>
                                    <div className='w-full h-px bg-[#979797]' />
                                </div>

                                <p>Meaning</p>

                                {meaning?.definitions?.map((definition) => {
                                    return (
                                        <>
                                            <li className="ml-5 dark:text-white">{definition.definition}</li>
                                            {definition.example && (
                                                <p className="ml-10">"{definition.example}"</p>
                                            )}
                                        </>
                                    );
                                })}

                                {index === 0 && (
                                    <div className="flex gap-3">
                                        <p>Synonyms</p>
                                        <strong className="flex flex-wrap gap-1 text-[#A445ED] hover:cursor-pointer hover:underline">
                                            {meanings[0].synonyms?.map((synonym) => {
                                                return (<span> {synonym}</span>);
                                            })}
                                        </strong>
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    <div className='w-full h-px bg-[#979797]' />
                    <small className='flex gap-4'>
                        <p className='underline decoration-[#757575]'>Source</p>
                        <a href={sourceUrls?.[0]} target="_blank" className='underline dark:text-white'>{sourceUrls?.[0]}</a>
                    </small>
                </div >
            )}

            {error && (
                <div className='flex flex-col items-center mt-20'>
                    <img
                        src={errorFace}
                        alt="imagem de erro"
                        className="mb-8"
                    />

                    <h2 className='mb-4 dark:text-white'><strong>No Definitions Found</strong></h2>
                    <p>Sorry pal, we couldn't find definitions for the word you were looking for.</p>
                    <p>You can try the search again at later time or head to the web instead.</p>
                </div>
            )}
        </>
    );

}

export default DictionaryContent;
