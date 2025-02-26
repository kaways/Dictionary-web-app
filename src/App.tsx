import { Input } from "@/components/ui/input";
import Mode from '@/assets/images/Mode.png';
import { fetchWordDefinition } from '@/store/dictionary/dictionaryThunks';
import { Switch } from "@/components/ui/switch";
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { Search, BookMinus } from 'lucide-react';
import { useAppDispatch } from '@/hooks/appDispatch';
import { zodResolver } from "@hookform/resolvers/zod";
import { RootState } from '@/store/store';
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";


export function App() {
  const { data } = useSelector((state: RootState) => state.dictionary);
  const dispatch = useAppDispatch();

  const formSchema = z.object({
    word: z.string().min(2, {
      message: "word must be at least 2 characters.",
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      word: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    dispatch(fetchWordDefinition(values.word));
    console.log(data)
  }

  return (
    <div className="mx-auto max-w-2xl items-center gap-x-4 p-6">

      <div className="flex justify-between mb-8">
        <BookMinus className="size-6 shrink-0" />

        <div className="flex gap-4">
          <h2>Sans Seriff</h2>
          <div>
            <Switch />
          </div>
          <div>
            <img className="size-4 shrink-0" src={Mode} alt="Dictionary Logo" />
          </div>
        </div>
      </div>


      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="word"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex mx-auto relative">
                    <Input placeholder="Pesquisar" className="h-12" {...field} />
                    <Search color="purple" size={20} className="absolute right-0 mr-4 mt-3" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>

      <div className="flex flex-col ">
        {data && (
          <>
            <div>
              <h1>{data && data[0]?.word}</h1>
            </div>
            <em>{data[0]?.phonetic}</em>
            <b>noun</b>
            <p>Meaning</p>
            <li>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
            <li>A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</li>
            <li>A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.</li>

            <div><p>Synonyms</p>  <strong>electronic keyboard</strong></div>


            <b>verb</b>
            <span>{data[0]?.phonetic}</span>

            <p>Meaning</p>
            <li>To type on a computer keyboard.</li>
            <p>“Keyboarding is the part of this job I hate the most.”</p>

          </>
        )}
      </div>

    </div>
  )
}
