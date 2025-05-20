"use client";
import { ListCheck, PlusCircle } from "lucide-react";
import { TitleBlock } from "../TitleBlock";
import { ChaptersBlockProps } from "./ChaptersBlock.types";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FormChapterName } from "./FormChapterName";

export function ChaptersBlock(props: ChaptersBlockProps) {
  const { chapters, idCourse } = props;
  const [chaptersList, setChaptersList] = useState(chapters ?? []);
  const [showInputChapter, setShowInputChapter] = useState(false);
  return (
    <div className="p-6 bg-white rounded-md h-fit relative">
      <TitleBlock title="Course chapters" icon={ListCheck}></TitleBlock>

      <div className="flex gap-2 items-center justify-between mb-3">
        <p>Full chapters</p>
        <Button
          variant={"outline"}
          size={"sm"}
          className="cursor-pointer"
          onClick={() => setShowInputChapter(true)}
        >
          <PlusCircle className="w-4 h-4"></PlusCircle>
          Create chapter
        </Button>
      </div>
      {showInputChapter ? (
        <FormChapterName
          setShowInputChapter={setShowInputChapter}
          idCourse={idCourse}
        ></FormChapterName>
      ) : (
        showInputChapter
      )}
    </div>
  );
}
