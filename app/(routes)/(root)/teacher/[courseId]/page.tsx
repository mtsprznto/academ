import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { CourseForm, HeaderCourse } from "./components";

export default async function Course({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const { userId } = await auth();
  if (!userId) {
    return <p>You are not allowed to view this course 👋</p>;
  }
  const course = await prisma.course.findUnique({
    where: {
      id: courseId,
      userId: userId,
    },
    include: {
      chapters: true,
    },
  });

  if (!course) {
    return <p>This course does not exist</p>;
  }
  return (
    <div className="m-6">
      <HeaderCourse
        idCourse={course.id}
        isPublished={course.isPublished}
      ></HeaderCourse>

      <CourseForm course={course}></CourseForm>
    </div>
  );
}
