'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { useCallback, useMemo } from 'react';

const formSchema = z.object({
    form: z.string().min(1, 'Please select From location.'),
    to: z.string().min(1, 'Please select To location.'),
    depart: z.date({
        required_error: "Please select a date and time",
        invalid_type_error: "That's not a date!",
    }),
    return: z.date().optional(),
    adults: z.number(),
    children: z.number(),
    infant: z.number(),
    class: z.string({
        required_error: "please select cabin class"
    }),
    oneway: z.boolean(),
    direct: z.boolean()
})

const FlightForm = () => {

    

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            form: '',
            to: '',
            depart: new Date(),
            return: new Date(),
            adults: 1,
            children: 0,
            infant: 0,
            class: 'economy',
            oneway: true,
            direct: false
        }
    });

    const toggleOnwayReturn = useMemo(() => {
        if (form.getValues('oneway') == true) {
            return true;
        } else {
            return false;
        }
    }, [form]);

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    }
    return (
        <div>
            {/* 

            1. From  string (select box)
            2. To string (select box)
            3. Depart date (date picker)
            4. Return date (date picker) optional
            5. Travellers & cabin class
                                Travellers number (counter)
                                Cabin class string (select box)
            6. One way or return boolean (radio box)
            7. Direct flights boolean (check box)
        
        */}

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-1 flex-row items-center justify-evenly">
                    <FormField
                        control={form.control}
                        name="form"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>From</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="From Anywhere" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Karachi">Karachi</SelectItem>
                                        <SelectItem value="Islamabad">Islamabad</SelectItem>
                                        <SelectItem value="Lahore">Lahore</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="to"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>To</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="To Everywhere" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Australia">Australia Airport</SelectItem>
                                        <SelectItem value="Dubai">Dubai Airport</SelectItem>
                                        <SelectItem value="Spain">Spain Airpoort</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {toggleOnwayReturn ? (
                        <FormField
                        control={form.control}
                        name="depart"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Depart</FormLabel>
                                <Popover>
                                    <FormControl>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-[280px] justify-start text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                    </FormControl>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    ) : (<>return field</>)}


                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default FlightForm