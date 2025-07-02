import PostCard from "../../components/PostCard";
import { getAllPosts } from "../../lib/posts";
import { Search } from "lucide-react";

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Todos los Posts
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explorá todo nuestro contenido sobre hockey, desde técnica y táctica 
            hasta desarrollo personal para entrenadores.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Buscar posts..."
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Categories Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 bg-green-600 text-white rounded-full font-medium">
              Todos
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition-colors">
              Habilidades
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition-colors">
              Entrenador
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition-colors">
              General
            </button>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            Cargar más posts
          </button>
        </div>
      </div>
    </div>
  );
}
