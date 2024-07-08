import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([
    { id: 1, title: "Getting Started with React", date: "2023-03-15", description: "Learn the basics of React and start building your first app." },
    { id: 2, title: "CSS Grid Layout", date: "2023-03-10", description: "Master CSS Grid Layout and create responsive designs with ease." },
    { id: 3, title: "JavaScript ES6 Features", date: "2023-03-05", description: "Explore the powerful features introduced in ECMAScript 6." },
    { id: 4, title: "Introduction to TypeScript", date: "2023-02-28", description: "Discover how TypeScript can improve your JavaScript development experience." },
    { id: 5, title: "Responsive Web Design Techniques", date: "2023-02-20", description: "Learn best practices for creating websites that look great on any device." },
  ]);

  const handleDelete = (id) => {
    setBlogPosts(blogPosts.filter(post => post.id !== id));
    toast.success("Blog post deleted successfully!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <Button asChild>
          <Link to="/add-post">Add New Post</Link>
        </Button>
      </div>
      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <p className="text-sm text-gray-500">{post.date}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{post.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild>
                <Link to={`/blog/${post.id}`}>Read More</Link>
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">Delete</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete the blog post.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleDelete(post.id)}>
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;