import Image from "next/image";
import { CourseCardProps } from "./CourseCard.types";

export function CourseCard(props: CourseCardProps) {
  const { course } = props;
  const { id, title, price, level, imageUrl, description, isPublished } =
    course;

  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="flex flex-col lg:flex-row gap-4 items-start">
          <Image
            src={imageUrl ? imageUrl : "/default-courses.jpg"}
            alt="Course"
            width={150}
            height={150}
            className="rounded-md max-w-52"
          ></Image>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-medium">{title}</h2>
              {isPublished ? (
                <span className="inline-block bg-emerald-100 text-emerald-600 text-xs font-medium px-2 py-1 rounded-md ,mt-1">
                  Published
                </span>
              ) : (
                <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-md mt-1">
                  Unpublished
                </span>
              )}
            </div>
            {description ? (
              <p className="text-gray-400 w-full max-w-lg line-clamp-1 text-sm py-1">
                {description}
              </p>
            ) : (
              <p className="text-gray-400 w-full max-w-lg line-clamp-1 text-sm py-1">
                No description
              </p>
            )}

            <div className="flex flex-col md:flex-row gap-4 items-center">
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
