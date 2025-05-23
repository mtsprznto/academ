"use client";
import { Button } from "@/components/ui/button";
import { ChapterFormProps } from "./ChapterForm.types";
import { ArrowLeft, Cog, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { TitleBlock } from "../../../components";
import axios from "axios";
import { toast } from "sonner";
import { ChapterTitleForm } from "./ChapterTitleForm";
import { ChapterVideoForm } from "./ChapterVideoForm";

export function ChapterForm(props: ChapterFormProps) {
  const { chapter, courseId } = props;

  const router = useRouter();

  if (!chapter) {
    return null;
  }

  const onPublish = async (state: boolean) => {
    try {
      axios.patch(`/api/course/${courseId}/chapter/${chapter.id}`, {
        isPublished: state,
      });
      toast(state ? "Published chapter 😉" : "Unpublished chapter 📡");
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Oops something went wrong ❌");
    }
  };

  const removeChapter = async () => {
    axios.delete(`/api/course/${courseId}/chapter/${chapter.id}`);
    router.push(`/teacher/${courseId}`);
    toast("Chapter deleted 🔥")
  };

  return (
    <div>
      <div className="p-6 bg-white rounded-md">
        <Button
          className="cursor-pointer mb-4"
          variant={"outline"}
          onClick={() => router.push(`/teacher/${courseId}`)}
        >
          <ArrowLeft></ArrowLeft>
          Back
        </Button>
      </div>
      <p className="mt-3">
        Course status: {chapter.isPublished ? "Public" : "Unpublished"}
      </p>
      <div className="p-6 mt-6 bg-white rounded-md flex justify-between items-center">
        <TitleBlock title="Chapter configuration" icon={Cog}></TitleBlock>

        <div className="gap-2 flex items-center">
          {chapter?.isPublished ? (
            <Button
              className="cursor-pointer"
              variant={"outline"}
              onClick={() => onPublish(false)}
            >
              Hide
            </Button>
          ) : (
            <Button
              className="cursor-pointer"
              variant={"outline"}
              onClick={() => onPublish(true)}
            >
              Publish
            </Button>
          )}

          <Button
            className="cursor-pointer"
            variant={"destructive"}
            onClick={removeChapter}
          >
            <Trash></Trash>
          </Button>
        </div>
      </div>
      <ChapterTitleForm
        courseId={courseId}
        chapter={chapter}
      ></ChapterTitleForm>
      <ChapterVideoForm
        chapterId={chapter.id}
        courseId={courseId}
        videoUrl={chapter.videoUrl}
      ></ChapterVideoForm>
    </div>
  );
}
