import React from "react";
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-6">
                        <a
                            href="/preview/89c7522c-1011-40bb-9bf8-f790b6e6723a/3469148"
                            className="flex items-center space-x-2"
                        >
                            <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                                <img
                                    src="https://images.wantedly.com/i/UjSrnL6?w=128&h=128"
                                    alt="Yuki Logo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="font-['Pacifico'] text-xl">Kitano Studio</span>
                        </a>
                        <p className="text-gray-400 leading-relaxed">
                            Transforming lives through the power of freedom, connection, and
                            authentic success. Join the journey to design a life that moves
                            with you.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://x.com"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="https://instagram.com"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://youtube.com"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
                            >
                                <FaYoutube />
                            </a>
                            <a
                                href="https://linkedin.com"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-6">Courses</h3>
                        <ul className="space-y-3">
                            <li>
                                <a className="text-gray-400 hover:text-white transition-colors" href="#TheVibesFramework">
                                    The Vibes Framework
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white transition-colors" href="#NomadStartupBootcamp">
                                    Nomad Startup Bootcamp
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white transition-colors" href="#CommunityAsAProduct">
                                    Community as a Product
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white transition-colors" href="#VibeBrandingMasterclass">
                                    Vibe Branding Masterclass
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white transition-colors" href="#FreedomDesign101">
                                    Freedom Design 101
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-6">Resources</h3>
                        <ul className="space-y-3">
                            <li>
                                <a className="text-gray-400 hover:text-white transition-colors" href="#Blog">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white transition-colors" href="#Podcast">
                                    Podcast
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white transition-colors" href="#FreeGuides">
                                    Free Guides
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white transition-colors" href="#Community">
                                    Community
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white transition-colors" href="#SuccessStories">
                                    Success Stories
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-6">Support</h3>
                        <ul className="space-y-3">
                            <li>
                                <a className="text-gray-400 hover:text-white transition-colors" href="#HelpCenter">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white transition-colors" href="#ContactUs">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white transition-colors" href="#BookACall">
                                    Book a Call
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white transition-colors" href="#PrivacyPolicy">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white transition-colors" href="#TermsOfService">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">© 2024 Kitano Studio. All rights reserved.</p>
                        <div className="flex items-center space-x-6">
                            <a
                                href="https://azyfi.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors text-sm"
                            >
                                Made by Azer
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
