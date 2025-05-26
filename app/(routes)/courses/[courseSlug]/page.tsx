import { redirect } from "next/navigation";

import { getPurchaseCourseById } from "@/actions/getPurchaseCourseById";
import { getCourseBySlug } from "@/actions/getCourseBySlug";

import { BreadCrumbCourse, HeroBlockCourse } from "./components";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ courseSlug: string }>;
}) {
  //obtener url
  const { courseSlug } = await params;

  const infoCourse = await getCourseBySlug(courseSlug);

  if (!infoCourse) {
    redirect("/");
  }

  const { title, userId, id } = infoCourse;

  const purchaseCourse = await getPurchaseCourseById(userId, id);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="my-4 mx-6 border rounded-lg bg-white p-6">
        <BreadCrumbCourse title={title}></BreadCrumbCourse>
        <HeroBlockCourse
          course={infoCourse}
          purchaseCourse={purchaseCourse}
        ></HeroBlockCourse>
      </div>
    </div>
  );
}
