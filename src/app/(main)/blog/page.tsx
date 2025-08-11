import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Tensor Base - Blog",
    description: "Insights and updates from the Tensor Base team.",
};

// --- Placeholder Data ---
const authors = [
    { name: 'Keith Kurak', role: 'Engineering', avatarUrl: 'https://placehold.co/40x40/1E293B/FFFFFF?text=KK' },
    { name: 'Chrys Bader', role: 'Guest Author', avatarUrl: 'https://placehold.co/40x40/1E293B/FFFFFF?text=CB' },
    { name: 'Karol Koronowicz', role: 'Guest Author', avatarUrl: 'https://placehold.co/40x40/1E293B/FFFFFF?text=KK' },
];

const blogPosts = [
    {
        category: 'Development, AI/ML, Product',
        title: '5 Groundbreaking AI Features You Should Be Using',
        description: 'Unlock hidden gems in the Tensor Base SDK. These 5 features boost performance, save time, and turn your AI/ML app into a full-stack powerhouse.',
        date: 'August 10, 2025',
        readTime: '4 minutes read',
        author: { name: 'Beto Moedano', role: 'Engineering', avatarUrl: 'https://placehold.co/40x40/1E293B/FFFFFF?text=BM' },
        imageUrl: 'https://placehold.co/600x400/0F172A/FFFFFF?text=AI+Features',
    },
    {
        category: 'Product, AI/ML, Development',
        title: '6 Reasons to Use Real-Time Model Updates',
        description: 'Real-time updates are a flexible tool for seamlessly delivering live app updates, bug fixes, content changes, beta features, and more for a better end user experience.',
        date: 'August 02, 2025',
        readTime: '8 minutes read',
        author: { name: 'Quin Jung', role: 'Engineering', avatarUrl: 'https://placehold.co/40x40/1E293B/FFFFFF?text=QJ' },
        imageUrl: 'https://placehold.co/600x400/1E293B/FFFFFF?text=Updates',
    },
    {
        category: 'Product, AI/ML',
        title: 'Precompiled AI Models for Faster Builds are Coming',
        description: 'Tensor Base 0.81 introduces precompiled model builds, cutting compile times by up to 10x in projects where AI model compilation is the primary dependency.',
        date: 'July 24, 2025',
        readTime: '9 minutes read',
        author: { name: 'Christian and Brent', role: 'Engineering', avatarUrl: 'https://placehold.co/40x40/1E293B/FFFFFF?text=CB' },
        imageUrl: 'https://placehold.co/600x400/334155/FFFFFF?text=Models',
    },
];

const BlogPage = () => {
    return (
        <div className="bg-[#111111] text-white min-h-screen">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                {/* Header with Author Avatars */}
                <div className="flex items-center justify-center space-x-8 mb-16">
                    {authors.map(author => (
                        <div key={author.name} className="flex items-center space-x-3">
                            <img className="w-10 h-10 rounded-full" src={author.avatarUrl} alt={author.name} />
                            <div>
                                <p className="font-semibold">{author.name}</p>
                                <p className="text-sm text-gray-400">{author.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Blog Post Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {blogPosts.map(post => (
                        <div key={post.title} className="flex flex-col">
                            <a href="#" className="block mb-4">
                                <img className="rounded-xl w-full h-64 object-cover transition-transform duration-300 hover:scale-105" src={post.imageUrl} alt={post.title} />
                            </a>
                            <p className="text-sm text-gray-400 mb-2">{post.category}</p>
                            <h2 className="text-2xl font-bold mb-3">
                                <a href="#" className="hover:text-gray-300">{post.title}</a>
                            </h2>
                            <p className="text-gray-400 mb-4 flex-grow">{post.description}</p>
                            <div className="flex items-center text-sm text-gray-400">
                                <img className="w-8 h-8 rounded-full mr-3" src={post.author.avatarUrl} alt={post.author.name} />
                                <div>
                                    <p className="font-semibold text-white">{post.author.name}</p>
                                    <p>{post.author.role}</p>
                                </div>
                                <span className="mx-2">&middot;</span>
                                <p>{post.date}</p>
                                <span className="mx-2">&middot;</span>
                                <p>{post.readTime}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-16">
                    <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                        Load More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
