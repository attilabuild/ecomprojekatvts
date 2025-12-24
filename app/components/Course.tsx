import Image from "next/image";
import Link from "next/link";

interface CourseProps {
  title: string;
  price: string;
  image: string;
  description?: string;
  slug: string;
}

export default function Course({ title, price, image, description, slug }: CourseProps) {
  const isFree = price.toLowerCase() === "free";
  
  return (
    <div className="group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link href={`/course/${slug}`} className="block">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            unoptimized
          />
          {isFree && (
            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              FREE
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          {description && (
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
          )}
          <div className="flex items-center justify-between">
            <span className={`text-2xl font-bold ${isFree ? 'text-green-600' : 'text-[#1a1a2e]'}`}>
              {isFree ? 'Free' : `$${price}`}
            </span>
          </div>
        </div>
      </Link>
      <div className="px-6 pb-6">
        {isFree ? (
          <Link
            href={`/course/${slug}/enroll`}
            className="block w-full text-center bg-[#1a1a2e] text-white px-6 py-2 rounded font-semibold hover:bg-[#2a2a3e] transition-colors"
          >
            Get Course for Free
          </Link>
        ) : (
          <Link
            href={`/course/${slug}`}
            className="block w-full text-center bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition-colors"
          >
            Buy Now
          </Link>
        )}
      </div>
    </div>
  );
}

