import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Me</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your name" required />
        </div>
        <div className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Your email" required />
        </div>
        <div className="mb-4">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" placeholder="Message subject" required />
        </div>
        <div className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Your message" required />
        </div>
        <Button type="submit" className="w-full">Send Message</Button>
      </form>
    </div>
  );
};

export default Contact;