import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CourseCard from "./ui/CourseCard";

const courses = [
    {
        title: "The Vibes Framework: Finding Flow in Work & Life",
        level: "Beginner",
        duration: "6 weeks",
        price: "297",
        rating: 4.9,
        image:
            "/img/course-placeholder.png",
        description:
            'Discover how to align your daily actions with your inner rhythm. Yuki shares practical tools to identify your "vibes state" and sustain energy, creativity, and focus in your career and personal life.',
        popular: true,
        stars: 5,
    },
    {
        title: "Nomad Startup Bootcamp",
        level: "Intermediate",
        duration: "8 weeks",
        price: "497",
        rating: 4.9,
        image:
            "/img/course-placeholder.png",
        description:
            "A hands-on bootcamp guiding you to create a business that supports mobility and freedom. Learn how to build remote-ready services, grow your brand online, and live wherever inspiration takes you.",
        stars: 5,
    },
    {
        title: "Community as a Product",
        level: "Advanced",
        duration: "4 weeks",
        price: "397",
        rating: 4.9,
        image:
            "/img/course-placeholder.png",
        description:
            "Turn human connection into your biggest asset. Explore how Yuki transformed guesthouses and co-living spaces into thriving communities — and learn how to design belonging as part of your business.",
        stars: 5,
    },
    {
        title: "Vibe Branding Masterclass",
        level: "Intermediate",
        duration: "5 weeks",
        price: "347",
        rating: 4.9,
        image:
            "/img/course-placeholder.png",
        description:
            "Go beyond logos and colors — build emotional resonance. Learn how to express \"vibes\" through storytelling, visuals, and authentic marketing that attracts people who share your energy.",
        stars: 5,
    },
    {
        title: "Workation Essentials: Redefining Productivity",
        level: "Beginner",
        duration: "3 weeks",
        price: "197",
        rating: 4.9,
        image:
            "/img/course-placeholder.png",
        description:
            "Master the balance between work and wander. Yuki teaches routines, tools, and mindset shifts for staying creative and productive while living anywhere — from Tokyo to Okinawa.",
        stars: 5,
    },
    {
        title: "Freedom Design 101: Building a Life That Moves With You",
        level: "Beginner",
        duration: "6 weeks",
        price: "247",
        rating: 4.9,
        image:
            "/img/course-placeholder.png",
        description:
            "A foundational course for those seeking independence. Learn how to design your life around freedom — from financial structure to time management — using Yuki's real-life experiences as a blueprint.",
        stars: 5,
    },
    {
        title: "Fail Fast, Flow Faster",
        level: "All Levels",
        duration: "2 weeks",
        price: "147",
        rating: 4.9,
        image:
            "/img/course-placeholder.png",
        description:
            "Failures are data — learn to use them. This short course shows how Yuki's early business failures became stepping stones toward success, teaching you how to recover, pivot, and keep your energy high.",
        stars: 5,
    },
];

export default function CoursesSection() {
    return (
        <section id="courses" className="py-20 bg-linear-to-r from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Courses That Change
                        <div className="block text-transparent bg-clip-text bg-linear-to-r from-[#c00014] to-[#F05542] p-2">
                            Everything
                        </div>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Each course is designed to help you build the mindset, skills, and systems
                        needed to create a life of freedom, connection, and authentic success.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <CourseCard key={course.title} {...course} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-600 cursor-pointer">
                        View All Courses <ArrowRight />
                    </Button>
                </div>
            </div>
        </section>
    );
}
