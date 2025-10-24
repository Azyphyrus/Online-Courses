import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
    quote: string;
    name: string;
    role: string;
    avatar: string;
    rating?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
    quote,
    name,
    role,
    avatar,
    rating = 5,
}) => {
    return (
        <Card className="rounded-xl border text-card-foreground shadow group hover:shadow-xl transition-all duration-300 cursor-pointer bg-white">
            <CardContent className="p-6">
                <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                        {Array.from({ length: rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        ))}
                    </div>
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed">"{quote}"</blockquote>
                <div className="flex items-center">
                    <img
                        src={avatar}
                        alt={name}
                        className="w-12 h-12 rounded-full object-cover object-top mr-4"
                    />
                    <div>
                        <div className="font-semibold text-gray-900">{name}</div>
                        <div className="text-sm text-gray-600">{role}</div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
