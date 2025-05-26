"use client";
import { useRouter } from "next/navigation";
import { HeroBlockCourseProps } from "./HeroBlockCourse.types";
import { useState } from "react";
import { IconBadge } from "@/components/Shared";
import { Calendar, Timer } from "lucide-react";
import { formatPrice } from "@/lib/formatPrice";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroBlockCourse(props: HeroBlockCourseProps) {
  const { course, purchaseCourse } = props;
  const {
    title,
    id,
    description,
    price,
    level,
    imageUrl,
    updatedAt,
    slug,
    chapters,
  } = course;

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();



  const enrollCourse = async () => {
    console.log("entol course");
  };
  const redirectToCourse = () => {
    router.push(`/courses/${slug}/${chapters[0].id}`);
  };



  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <div>
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="text-balance mt-2">{description}</p>

        <div className="flex flex-col gap-3 mt-5 text-gray-600">
          <IconBadge icon={Timer} text="7h 40min"></IconBadge>
          <IconBadge
            icon={Calendar}
            text={`Last update: ${new Date(updatedAt).toLocaleDateString(
              "es-ES"
            )}`}
          ></IconBadge>
        </div>

        <h2 className="text-xl font-semibold my-4">{formatPrice(price)}</h2>

        {purchaseCourse ? (
          <Button
            onClick={redirectToCourse}
            className="hover:bg-violet-400 text-white font-semibold"
            disabled={isLoading}
          >
            View course
          </Button>
        ) : (
          <Button
            onClick={enrollCourse}
            className="hover:bg-violet-400 text-white font-semibold"
            disabled={isLoading}
          >
            Register now
          </Button>
        )}
      </div>
      <Image
        src={imageUrl || "/default-courses.jpg"}
        width={500}
        height={500}
        alt={title}
      ></Image>
    </div>
  );
}
