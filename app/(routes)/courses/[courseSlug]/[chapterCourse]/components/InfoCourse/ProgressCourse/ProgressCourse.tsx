"use client"
import { Progress } from "@/components/ui/progress";
import { ProgressCourseProps } from "./ProgressCourse.types";
import { Button } from "@/components/ui/button";

export function ProgressCourse(props: ProgressCourseProps) {
  const { chapterCourseId, infoCourse, userProgress } = props;
  const { id, slug, chapters } = infoCourse;
  const totalChapters = chapters.length;
  const completedChapters = chapters.filter((chapter) =>
    userProgress.some(
      (progress) => progress.chapterId === chapter.id && progress.isCompleted
    )
  ).length;

  const progressPercentage =
    totalChapters > 0
      ? Math.round((completedChapters / totalChapters) * 100)
      : 0;

  return (
    <div>
      <div className="my-4 w-full flex items-center gap-2 flex-col p-2 border rounded-md shadow-md bg-white">
        <span className="text-sm">Course progress | {progressPercentage}%</span>
        <Progress
          value={progressPercentage}
          className="[&>*]:bg-violet-300"
        ></Progress>
      </div>

      <div className="my-4 w-full">
        <Button
          className="cursor-pointer w-full"
          onClick={() => console.log("complete")}
          variant={"outline"}
        >
          Mark as complete
        </Button>
      </div>
    </div>
  );
}
