import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Linkedin, Mail, Loader2, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { SectionLabel } from "./About";

const EMAIL = "jeffersonperolino04@gmail.com";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Please provide some details"),
});

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch(
        import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/mnjwvwry",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        }
      );
      if (response.ok) {
        toast({ title: "Message sent!", description: "I'll get back to you within 24 hours." });
        form.reset();
      } else {
        throw new Error();
      }
    } catch {
      toast({ variant: "destructive", title: "Failed to send", description: "Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="px-10 xl:px-16 py-14 border-t border-border">
      <SectionLabel>Contact</SectionLabel>

      <div className="grid md:grid-cols-2 gap-12 max-w-2xl">
        <div>
          <p className="text-[15px] leading-relaxed text-foreground mb-6">
            Have a project in mind? Let's talk. I respond to all messages within 24 hours.
          </p>

          <div className="mb-5">
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Email</p>
            <div className="flex items-center gap-2">
              <span className="text-[13px] font-semibold">{EMAIL}</span>
              <button
                onClick={copyEmail}
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="Copy email"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-green-600" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Social</p>
            <div className="flex items-center gap-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" className="text-sm h-9" {...field} />
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
                    <FormLabel className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" type="email" className="text-sm h-9" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Project inquiry" className="text-sm h-9" {...field} />
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
                  <FormLabel className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell me about your project..."
                      className="min-h-[100px] resize-none text-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full rounded-full h-10 text-sm" disabled={isSubmitting}>
              {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Sending...</> : "Send Message"}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
