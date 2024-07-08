import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">About Me</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <Avatar className="w-48 h-48">
          <AvatarImage src="/placeholder.svg" alt="Blog Owner" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4">John Doe</h2>
          <p className="text-gray-600 mb-4">
            Hi there! I'm John, a passionate web developer with over 5 years of experience in creating
            beautiful and functional websites. I started this blog to share my knowledge and experiences
            with fellow developers and anyone interested in the world of web development.
          </p>
          <p className="text-gray-600">
            When I'm not coding, you can find me hiking in the mountains, reading sci-fi novels, or
            experimenting with new recipes in the kitchen. Feel free to reach out if you have any
            questions or just want to chat about web development!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;