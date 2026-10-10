/** @format */
"use client";
import Image from "next/image";

export interface ReviewCardProps {
  text: string;
  name: string;
  country: string;
  avatar: string;
  rating?: number;
}

export default function ReviewCard({
  text,
  name,
  country,
  avatar,
  rating = 5,
}: ReviewCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 flex flex-col justify-between transition-all hover:shadow-2xl hover:-translate-y-1 duration-300 h-full text-start">
      <div>
        <div className="flex justify-between items-start mb-6">
          {/* Quote Icon */}
          <div className="text-brand-gold">
            <Image
              src="\“.svg"
              alt="Quote"
              className="w-8 h-8 opacity-80"
              width={24}
              height={24}
            />
          </div>
          {/* Stars */}
          <div className="flex text-brand-gold text-2xl">
            {"★".repeat(rating)}
          </div>
        </div>

        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 italic">
          "{text}"
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brand-primary/20 shrink-0">
          <Image
            src={avatar}
            alt={name}
            fill
            sizes="56px"
            className="object-cover"
          />
        </div>
        <div className="overflow-hidden">
          <div className="text-base font-bold text-gray-900 truncate">
            {name}
          </div>
          <div className="text-sm text-brand-primary font-semibold truncate">
            {country}
          </div>
        </div>
      </div>
    </div>
  );
}
