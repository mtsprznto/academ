import { currentUser } from "@clerk/nextjs/server";
import { ProgressCourseProps } from "./ProgressCourse.types";
import { getUserProgressByCourse } from "@/actions/getUserProgressByCourse";
import { Progress } from "@/components/ui/progress";
import { formatPrice } from "@/lib/formatPrice";

export async function ProgressCourse(props: ProgressCourseProps) {
  const { courseId, price, totalChapters } = props;
  const user = await currentUser();
  if (!user) {
    return <p className="text-xs mt-2">Not signed in</p>;
  }

  const progressCourse = await getUserProgressByCourse(user.id, courseId);

  return (
    <div className="mt-4">
      {totalChapters > 0 && progressCourse > 0 ? (
        <div>
          <Progress
            value={progressCourse}
            className="[&>*]:bg-violet-300"
          ></Progress>
          <p className="text-xs mt-1">{progressCourse}% Completed</p>
        </div>
      ) : (
        <h4>{formatPrice(price)}</h4>
      )}
    </div>
  );
}
