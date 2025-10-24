import { Button } from "@/components/ui/button";
import { PeopleGroupIcon } from "./ui/icons/akar-icons-people-group";
import { Clock, Calendar, Shield } from "lucide-react";

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-linear-to-r from-[#c00014] via-[#c0001394] to-[#c0001364] relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Your Journey to
              <div className="block">Freedom Starts Now</div>
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Join thousands of students who have already transformed their lives. Choose your path and start building the freedom-focused life you've always wanted.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="inline-flex items-center justify-center whitespace-nowrap font-medium text-lg px-8 py-4 h-10 rounded-md shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer">
              Start with The Vibes Framework
            </Button>
            <Button className="bg-transparent border text-white h-10 hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg flex items-center gap-2 cursor-pointer">
              <Calendar/>
              Book Free Consultation
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center space-x-8 pt-8 gap-y-4">
            <div className="flex items-center text-white/80 gap-2">
              <Shield className="w-5 h-5"/>
              <span className="text-sm">30-day money-back guarantee</span>
            </div>
            <div className="flex items-center text-white/80 gap-2">
              <Clock className="w-5 h-5" />
              <span className="text-sm">Lifetime access</span>
            </div>
            <div className="flex items-center text-white/80 gap-2">
              <PeopleGroupIcon className="w-5 h-5" />
              <span className="text-sm">Private community</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl" />
    </section>
  );
};
