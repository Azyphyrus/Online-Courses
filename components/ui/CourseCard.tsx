import Image from "next/image";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Star } from "lucide-react";

interface CourseCardProps {
    title: string;
    level: string;
    duration: string;
    price: string;
    description: string;
    rating: number;
    image: string;
    badge?: string;
    popular?: boolean;
    stars: number;
}

export default function CourseCard({
    title,
    level,
    duration,
    price,
    description,
    rating,
    image,
    popular,
    stars,
}: Readonly<CourseCardProps>) {
    return (
        <Card className={`relative group cursor-pointer transition-all duration-300 hover:shadow-lg ${popular ? "ring-2 ring-red-200 bg-linear-to-br from-red-50 to-orange-50" : ""}`} >
            {popular && (<div className="absolute -top-3 left-6 z-10 bg-linear-to-r from-[#c00014] to-[#F05542] text-white px-4 py-1 rounded-full text-sm font-medium"> Most Popular </div>)}

            <div className="relative overflow-hidden rounded-t-xl">
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-900">${price}</span>
                </div>
            </div>

            <CardHeader>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-[#c00014] bg-red-50 px-2 py-1 rounded-full">
                        {level}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {duration}
                    </span>
                </div>
                <CardTitle className="tracking-tight text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                    {title}
                </CardTitle>
                <CardDescription className="line-clamp-3 text-sm text-gray-600">
                    {description}
                </CardDescription>
            </CardHeader>

            <CardContent className="px-6 pb-4">
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-1">
                        <div className="flex text-yellow-400">
                            {Array.from({ length: stars }).map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            ))}
                        </div>
                        <span className="text-sm text-gray-500">({rating})</span>
                    </div>
                    <Button className="bg-linear-to-r from-[#c00014] to-[#F05542] hover:from-red-600 hover:to-orange-600 text-white shadow h-8 rounded-md px-3 text-xs cursor-pointer" >
                        Enroll Now
                    </Button>
                </div>
            </CardContent>
        </Card >
    );
}
