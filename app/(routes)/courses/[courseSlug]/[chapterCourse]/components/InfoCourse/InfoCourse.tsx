import { Lock } from "lucide-react";
import { InfoCourseProps } from "./InfoCourse.types";
import { VideoCourse } from "./VideoCourse";
import { ProgressCourse } from "./ProgressCourse";

export function InfoCourse(props: InfoCourseProps) {
  const {
    chapterCourseId,
    infoCourse,
    purchaseCourse,
    userProgress,
    videoUrl,
  } = props;

  return (
    <div className="w-full relative">
      {!purchaseCourse && (
        <div className="absolute inset-0 flex flex-col items-center justify-center backdrop:blur-md gap-y-2 h-full z-30 rounded-md text-secondary">
          <Lock className="w-8 h-8"></Lock>
          <p className="text-sm">
            Chapter locked. Pay for the course to unlock it.
          </p>
        </div>
      )}

      {videoUrl && <VideoCourse videoUrl={videoUrl}></VideoCourse>}

      <ProgressCourse
        userProgress={userProgress}
        chapterCourseId={chapterCourseId}
        infoCourse={infoCourse}
      ></ProgressCourse>
    </div>
  );
}
