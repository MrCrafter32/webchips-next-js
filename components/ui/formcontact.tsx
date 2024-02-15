"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
    username: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.string().min(10).max(10),
    message: z.string().min(10).max(1000),

  })

const FormContact = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
            email: "",
            phone: "",
            message: "",

        },
      })

    function onSubmit(values: z.infer<typeof formSchema>) {
      const formElement = document.querySelector("form");
      if (formElement) {
        const formDatab = new FormData(formElement);
        fetch(
          "https://script.google.com/macros/s/AKfycbwSlGRaZtC2qDui6fqhohjHNnksRTHIOA5AQI53IClWD-pLdgeR3tmZuMIjOejiDLYo/exec",
          {
             mode: 'no-cors',

            method: "POST",
            body: formDatab
          }
        )
          
      }}


  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email ID</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone No</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="" {...field} />
              </FormControl>
            </FormItem>
            
          )}
        />
        <Button variant={'outline'} type="submit" className="" >Submit</Button>
        </form>
    </Form>
    
  
  
    );
};

export { FormContact } ;
