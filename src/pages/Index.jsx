import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  const latestPosts = [
    { id: 1, title: "Getting Started with React", description: "Learn the basics of React and start building your first app." },
    { id: 2, title: "CSS Grid Layout", description: "Master CSS Grid Layout and create responsive designs with ease." },
    { id: 3, title: "JavaScript ES6 Features", description: "Explore the powerful features introduced in ECMAScript 6." },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-xl text-gray-600">Exploring the world of web development, one post at a time.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{post.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link to={`/blog/${post.id}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;