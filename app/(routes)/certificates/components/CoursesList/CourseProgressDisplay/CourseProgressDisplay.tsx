import { Progress } from "@/components/ui/progress";
import { CourseProgressDisplayProps } from "./CourseProgressDisplay.types";

export function CourseProgressDisplay(props: CourseProgressDisplayProps) {
  const { progress, titleCourse, userName } = props;
  const showProgress = progress === 100;

  return showProgress ? (
    <p>Download certificates</p>
  ) : (
    <>
      <Progress value={progress} className="[&>*]:bg-violet-300"></Progress>
      <p>{progress}% complete</p>
    </>
  );
}
