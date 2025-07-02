import Link from 'next/link'
import { Calendar, User, Clock, ArrowRight } from 'lucide-react'
import { Post } from '../lib/posts'

interface PostCardProps {
  post: Post
  compact?: boolean
}

export default function PostCard({
  post,
  compact = false
}: PostCardProps) {
  if (!post) {
    return null;
  }
  
  const { slug, title, excerpt, category, author, date, readTime, featured } = post
  const categoryColors = {
    'habilidades': 'bg-blue-100 text-blue-800',
    'entrenador': 'bg-green-100 text-green-800',
    'general': 'bg-gray-100 text-gray-800'
  }

  const categoryColor = categoryColors[category as keyof typeof categoryColors] || categoryColors.general

  return (
    <article className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 ${featured && !compact ? 'md:col-span-2 lg:col-span-3' : ''}`}>
      <div className={`p-6 ${featured && !compact ? 'md:flex md:items-center md:space-x-6' : ''}`}>
        <div className={featured && !compact ? 'md:flex-1' : ''}>
          {/* Categoría */}
          <div className="flex items-center justify-between mb-3">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${categoryColor}`}>
              {category}
            </span>
            {featured && !compact && (
              <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                Destacado
              </span>
            )}
          </div>

          {/* Título */}
          <h2 className={`font-bold text-gray-900 mb-3 line-clamp-2 ${featured && !compact ? 'text-2xl md:text-3xl' : compact ? 'text-lg' : 'text-xl'}`}>
            <Link href={`/posts/${slug}`} className="hover:text-green-600 transition-colors">
              {title}
            </Link>
          </h2>

          {/* Excerpt */}
          <p className={`text-gray-600 mb-4 line-clamp-3 ${featured && !compact ? 'text-lg' : compact ? 'text-sm' : ''}`}>
            {excerpt}
          </p>

          {/* Meta información */}
          <div className="flex items-center justify-between">
            <div className={`flex items-center space-x-4 text-sm text-gray-500 ${compact ? 'text-xs' : ''}`}>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
            </div>

            <Link
              href={`/posts/${slug}`}
              className={`inline-flex items-center space-x-1 text-green-600 hover:text-green-700 font-medium transition-colors ${compact ? 'text-xs' : 'text-sm'}`}
            >
              <span>Leer más</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export function PostCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 animate-pulse">
      <div className="w-20 h-6 bg-gray-200 rounded-full mb-3"></div>
      <div className="w-full h-6 bg-gray-200 rounded mb-3"></div>
      <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
      <div className="w-3/4 h-4 bg-gray-200 rounded mb-4"></div>
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <div className="w-16 h-4 bg-gray-200 rounded"></div>
          <div className="w-16 h-4 bg-gray-200 rounded"></div>
          <div className="w-16 h-4 bg-gray-200 rounded"></div>
        </div>
        <div className="w-16 h-4 bg-gray-200 rounded"></div>
      </div>
    </div>
  )
}
