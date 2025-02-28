

import { Input } from "@/components/ui/input";
import { fetchWordDefinition } from '@/store/dictionary/dictionaryThunks';
import { useForm } from "react-hook-form";
import { Search } from 'lucide-react';
import { useAppDispatch } from '@/hooks/appDispatch';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";

export const DictionarySearch = () => {
    const dispatch = useAppDispatch();

    const formSchema = z.object({
        word: z.string().min(1, {
            message: "Whoops, can’t be empty…",
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
    }

    return (

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="word"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className="flex mx-auto relative">
                                    <Input placeholder="Search for any word…" className="dark:bg-[#1F1F1F]" {...field} />
                                    <Search color="purple" size={20} className="absolute right-0 mr-4 mt-3" />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
}

export default DictionarySearch;