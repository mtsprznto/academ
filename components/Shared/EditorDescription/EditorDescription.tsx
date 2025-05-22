"use client"
import dynamic from "next/dynamic";
import { useMemo } from "react";
import "react-quill-new/dist/quill.snow.css";
import { EditorDescriptionProps } from "./EditorDescription.types";


export const EditorDescription = (props: EditorDescriptionProps) => {
  const { onChange, value } = props;
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill-new"), { ssr: false }),
    []
  );

  return (
    <ReactQuill theme="snow" value={value} onChange={onChange}></ReactQuill>
  );
};
