import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/useToast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "You need to provide a name!",
  }),
  email: z.string().email({
    message: "You need to provide a valid email address!",
  }),
  phone: z.string().min(10, {
    message: "You need to provide a valid phone number!",
  }),
  message: z.string().min(1, {
    message: "You need to send a message!",
  }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // Player Info
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const { toast } = useToast();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    toast({
      title: "Your submission has been sent!",
      description: "We will be in touch shortly.",
      variant: "success",
    });
    // const res = await fetch("/api/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(values),
    // });

    // console.log(values);

    // if (res.ok) {
    //   form.reset();
    //   toast({
    //     title: "Your submission has been sent!",
    //     description: "We will be in touch shortly.",
    //     // TODO: Add success variant.
    //     variant: "default",
    //   });
    // } else {
    //   toast({
    //     title: "There was an error submitting your form.",
    //     description: "Please try again later.",
    //     variant: "destructive",
    //   });
    // }
  };

  /* TODO: Fix mobile formatting for the form.
   * The form is too far to the left on mobile.
   * The title is too far to the left on mobile. (Prob fixable on the index page.)
   */

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 mb-12 p-12 rounded-sm bg-white"
      >
        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="me@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="123-456-7890" {...field} />
              </FormControl>
              <FormMessage />
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
                <Textarea placeholder="Message..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="m-auto flex flex-col items-center justify-center"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export { ContactForm };