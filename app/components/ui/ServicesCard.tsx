"use client";
import ServiceIcon from "@/app/Icons";
import { Package } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
interface Props extends Package {
  showMore: string;
  showLess: string;
}
const ServicesCard = (props: Props) => {
  const [showAll, setShowAll] = useState(false);

  const features = props.features || [];
  const featureSectionsToShow =
    showAll && features.length > 1 ? features : features.slice(0, 1);
  return (
    <div
      data-aos="fade-up"
      className="relative mt-18 lg:m-0 p-2 text-white rounded-xl rounded-tl-none shadow-lg flex flex-col justify-between w-full max-w-sm text-xl"
      style={{
        backgroundImage: "url(/serviceCardBg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Icon and Package Name */}
      <div className="px-4 absolute top-[-80px] py-1 text-base sm:text-lg text-white font-semibold rounded-bl-none rounded-tl-4xl right-0 left-0">
        <ServiceIcon color={props.color} />
        <span className="absolute inset-0 grid place-content-center">
          {props.name}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 pt-14">
        <Image
          src={props.img}
          alt={props.title}
          width={360}
          height={160}
          className="w-full h-40 object-cover rounded-xl mb-4"
        />
        <h4 className="font-bold mb-1 text-sm sm:text-xl">{props.title}</h4>
        <p className="text-sm sm:text-xl mb-4">{props.description}</p>

        {/* Feature Sections */}
        {featureSectionsToShow.map((featureSection, index) => (
          <div key={index}>
            <h4 className="font-bold mb-1 text-sm sm:text-xl">
              {featureSection.title}
            </h4>

            {featureSection.data.map((section, sectionIdx) => (
              <div key={sectionIdx} className="mb-4">
                {section.title && (
                  <h5 className="text-sm sm:text-lg font-semibold mb-2">
                    {section.title}
                  </h5>
                )}
                <ul className="list-none space-y-2 text-sm sm:text-base">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Image
                        alt="✔️"
                        src={"/CheckCircle.svg"}
                        width={40}
                        height={40}
                        className="h-5 w-5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}

        {/* Show More / Less Toggle */}
        {props.features.length > 1 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm underline text-white mt-2"
          >
            {showAll ? props.showLess : props.showMore}
          </button>
        )}
      </div>

      {/* CTA Button */}
      <div className="p-4 sm:p-6 pt-0 w-full">
        <a href={props.subscribeURL} target="_blank" rel="noopener noreferrer">
          <button className="btn-yellow w-full">{props.subscribeText}</button>
        </a>
      </div>
    </div>
  );
};

export default ServicesCard;
