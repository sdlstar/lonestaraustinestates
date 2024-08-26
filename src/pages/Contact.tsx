import Menu from "../components/Menu";
import FooterComponent from "../components/FooterComponent";
import { Label, TextInput, Textarea, Card } from "flowbite-react";
import { HiEnvelope } from "react-icons/hi2";

function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Menu />
      <div className="flex-grow flex items-center justify-center">
        <Card className="flex max-w-md flex-col gap-4 shadow-sm">
          <div className="flex items-center gap-4">
            <img className="w-16 h-16 rounded-full object-cover" src="https://media.licdn.com/dms/image/C5603AQEzX3FiwcRKYg/profile-displayphoto-shrink_800_800/0/1575746770209?e=1725494400&v=beta&t=5XdtHSCoqAwI3HRwKbUFpCEzqTvPv1Kw2F6r3blkel4"/>
            <h1 className="text-2xl font-bold">Contact Us</h1>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Name" />
            </div>
            <TextInput id="base" type="text" sizing="md" placeholder="Jane Doe" required />
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="email4" value="Your email" />
            </div>
            <TextInput id="email4" type="email" icon={HiEnvelope} placeholder="name@mail.com" required />
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Your message" />
            </div>
            <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
          </div>
          <p className="text-sm text-gray-500 italic">Or email us directly at: akhilmanthina@gmail.com</p>
        </Card>
      </div>
      <FooterComponent />
    </div>
  );
}

export default Contact;