import { Card, CardContent } from '@/components/ui/card';
import { Code, Users, BookOpen, CheckCircle, MessageCircle, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChoosePriyonix = () => {
    const features = [
        {
            icon: <Code className="text-blue-600 w-8 h-8" />,
            title: 'Live Coding Sessions',
            description: 'Hands-on coding experience with real-time guidance from industry experts.'
        },
        {
            icon: <Users className="text-purple-600 w-8 h-8" />,
            title: 'IIT/NIT Alumni Mentors',
            description: 'Learn from the best minds who bring industry heartbeat to classroom.'
        },
        {
            icon: <BookOpen className="text-green-600 w-8 h-8" />,
            title: 'PLMS Platform',
            description: 'World-class Learning Management System for seamless education.'
        },
        {
            icon: <CheckCircle className="text-orange-500 w-8 h-8" />,
            title: '100% Placement Guarantee',
            description: 'Direct industry connections with resume building and mock interviews.'
        },
        {
            icon: <MessageCircle className="text-pink-500 w-8 h-8" />,
            title: 'Communication Grooming',
            description: 'Develop professional communication skills for global opportunities.'
        },
        {
            icon: <Globe className="text-indigo-500 w-8 h-8" />,
            title: 'Global Relevance',
            description: 'Curriculum designed for international standards and opportunities.'
        },
    ];

    return (
        <section id="why" className="max-w-7xl mx-auto px-4 py-16">
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl font-bold text-center mb-4"
            >
                Why Choose <span className="text-gray-400">Priyonix</span>
            </motion.h2>
            <p className="text-center mb-12 text-lg text-black">
                We offer comprehensive training with an industry-driven approach, ensuring you&apos;re ready for the global tech arena.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <Card className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                            <CardContent className="flex flex-col items-start">
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-2 text-black">{feature.title}</h3>
                                <p className="text-black">{feature.description}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WhyChoosePriyonix;
