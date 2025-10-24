import { TestimonialCard } from "./ui/TestimonialCard";

const testimonials = [
  {
    quote: "Yuki's Vibes Framework completely transformed how I approach work. I finally found my rhythm and built a business that supports my lifestyle. The mindset shifts are profound.",
    name: "Sarah Chen",
    role: "Digital Nomad & Entrepreneur",
    avatar: "/img/placeholder-profile.png"
  },
  {
    quote: "The Community as a Product course opened my eyes to the power of human connection in business. Yuki's real-world examples from his guesthouses were incredibly inspiring.",
    name: "Marcus Rodriguez",
    role: "Community Builder",
    avatar: "/img/placeholder-profile.png"
  },
  {
    quote: "Yuki's approach to branding goes beyond surface-level tactics. The Vibe Branding Masterclass taught me how to create authentic emotional connections with my audience.",
    name: "Aiko Tanaka",
    role: "Brand Strategist",
    avatar: "/img/placeholder-profile.png"
  },
  {
    quote: "The Nomad Startup Bootcamp gave me the exact roadmap I needed. Within 6 months, I launched a remote business that lets me work from anywhere. Game-changing!",
    name: "David Kim",
    role: "Remote Startup Founder",
    avatar: "/img/placeholder-profile.png"
  },
  {
    quote: "Freedom Design 101 was exactly what I needed to restructure my life. Yuki's practical frameworks helped me create the independence I'd been dreaming of for years.",
    name: "Emma Thompson",
    role: "Lifestyle Designer",
    avatar: "/img/placeholder-profile.png"
  },
  {
    quote: "Fail Fast, Flow Faster changed my relationship with failure completely. Yuki's insights helped me turn setbacks into stepping stones. My creativity has never been higher.",
    name: "Hiroshi Nakamura",
    role: "Creative Director",
    avatar: "/img/placeholder-profile.png"
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Stories,
            <div className="block text-transparent bg-clip-text bg-linear-to-r from-[#c00014] to-[#F05542]">
              Real Results
            </div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of students who have transformed their lives and businesses through Yuki's unique approach to freedom and authentic success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.name}
              quote={t.quote}
              name={t.name}
              role={t.role}
              avatar={t.avatar}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">2,500+</div>
              <div className="text-sm text-gray-600">Happy Students</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">95%</div>
              <div className="text-sm text-gray-600">Completion Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
