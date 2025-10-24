import React from "react";
import { Button } from "@/components/ui/button";
import { PlayCircleIcon } from "@/components/ui/icons/heroicons-play-circle";

const HeroSection: React.FC = () => {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage:
                    "url('https://images.wantedly.com/i/cCXF59S?w=960')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 bg-linear-to-r from-white/90 via-white/70 to-transparent" />
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Find Your
                                <div className="block text-transparent bg-clip-text bg-linear-to-r from-[#c00014] to-[#F05542]">
                                    Flow State
                                </div>
                            </h1>
                            <p className="text-xl text-black leading-relaxed max-w-lg">
                                Join Yuki on a journey to design a life of freedom, connection,
                                and authentic success. Learn the mindset and practical tools
                                that turn curiosity into your greatest asset.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="inline-flex items-center justify-center whitespace-nowrap font-medium text-lg px-8 py-4 h-10 rounded-md shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer">
                                Explore Courses
                            </Button>

                            <Button variant="outline" className="inline-flex items-center justify-center whitespace-nowrap font-medium text-lg px-8 py-4 h-10 rounded-md border shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer">
                                <PlayCircleIcon className="mr-1 relative top-px" />
                                Watch Story
                            </Button>
                        </div>

                        <div className="flex items-center space-x-8 pt-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900">2,500+</div>
                                <div className="text-sm text-gray-600">Students</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900">7</div>
                                <div className="text-sm text-gray-600">Courses</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900">4.9★</div>
                                <div className="text-sm text-gray-600">Rating</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;