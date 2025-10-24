import React from "react";
import { Calendar, Globe } from "lucide-react";
import { PeopleGroupIcon } from "./ui/icons/akar-icons-people-group";
import { Button } from "@/components/ui/button";

const AboutSection: React.FC = () => {
    const stats = [
        { icon: <PeopleGroupIcon className="text-white text-xl" />, number: "15+", label: "Communities Built" },
        { icon: <Globe className="text-white text-xl" />, number: "25+", label: "Countries Explored" },
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="space-y-6">

                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                                Living the
                                <div className="block text-transparent bg-clip-text bg-linear-to-r from-[#c00014] to-[#F05542]">
                                    Philosophy
                                </div>
                            </h2>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                Yuki isn't just a teacher — he's someone who lives the mindset he shares. From transforming guesthouses into thriving communities to building businesses that support true freedom, his journey embodies the principles of connection, curiosity, and authentic success.
                            </p>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                Through years of experimentation, failure, and breakthrough, Yuki has developed a unique approach that turns freedom, connection, and curiosity into a lifestyle and learning philosophy that anyone can adopt.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center p-6 bg-gray-50 rounded-xl">
                                    <div className="w-12 h-12 bg-linear-to-r from-[#c00014] to-[#F05542] rounded-full flex items-center justify-center mx-auto mb-4">
                                        {stat.icon}
                                    </div>
                                    <div className="text-2xl font-bold text-gray-900 mb-2">{stat.number}</div>
                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="bg-black text-white shadow h-10 px-8 cursor-pointer" >
                                Read Full Story
                            </Button>

                            <Button variant="outline" className="h-10 px-8 flex items-center gap-2 cursor-pointer" >
                                <Calendar className="mr-2" />
                                Book a Call
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative z-10">
                            <img
                                src="/img/Yuki.png"
                                alt="Portrait of Yuki"
                                className="w-full rounded-2xl shadow-2xl object-cover object-top"
                            />
                        </div>

                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-linear-to-r from-[#c00014] to-[#F05542] rounded-full opacity-20" />
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-linear-to-r from-[#c00014] to-[#F05542] rounded-full opacity-30" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
