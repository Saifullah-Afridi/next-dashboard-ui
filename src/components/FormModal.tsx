"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

// USE LAZY LOADING

// import TeacherForm from "./forms/TeacherForm";
// import StudentForm from "./forms/StudentForm";

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <h1>Loading...</h1>,
});
const ParentForm = dynamic(() => import("./forms/ParentForm"), {
  loading: () => <h1>Loading...</h1>,
});
const SubjectForm = dynamic(() => import("./forms/SubjectForm"), {
  loading: () => <h1>Loading...</h1>,
});
const ClassForm = dynamic(() => import("./forms/ClassForm"), {
  loading: () => <h1>Loading...</h1>,
});
const ExamForm = dynamic(() => import("./forms/ExamForm"), {
  loading: () => <h1>Loading...</h1>,
});
const AnnouncementForm = dynamic(() => import("./forms/AnnouncementForm"), {
  loading: () => <h1>Loading...</h1>,
});
const LessonForm = dynamic(() => import("./forms/LessonForm"), {
  loading: () => <h1>Loading...</h1>,
});
const AssignmentForm = dynamic(() => import("./forms/AssignmentForm"), {
  loading: () => <h1>Loading...</h1>,
});
const EventForm = dynamic(() => import("./forms/EventForm"), {
  loading: () => <h1>Loading...</h1>,
});
const ResultForm = dynamic(() => import("./forms/ResultForm"), {
  loading: () => <h1>Loading...</h1>,
});
const AttendanceForm = dynamic(() => import("./forms/AttendanceForm"), {
  loading: () => <h1>Loading...</h1>,
});

const forms: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
  parent: (type, data) => <ParentForm type={type} data={data} />,
  subject: (type, data) => <SubjectForm type={type} data={data} />,
  class: (type, data) => <ClassForm type={type} data={data} />,
  exam: (type, data) => <ExamForm type={type} data={data} />,
  announcement: (type, data) => <AnnouncementForm type={type} data={data} />,
  lesson: (type, data) => <LessonForm type={type} data={data} />,
  assignment: (type, data) => <AssignmentForm type={type} data={data} />,
  event: (type, data) => <EventForm type={type} data={data} />,
  result: (type, data) => <ResultForm type={type} data={data} />,
  attendance: (type, data) => <AttendanceForm type={type} data={data} />,
};

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
        ? "bg-lamaSky"
        : "bg-lamaPurple";

  const [open, setOpen] = useState(false);

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-8 flex flex-col gap-6">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Delete {table.charAt(0).toUpperCase() + table.slice(1)}
          </h3>
          <p className="text-gray-600">
            All data will be permanently removed. This action cannot be undone.
          </p>
        </div>
        <div className="flex gap-3 justify-center">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="px-6 py-2.5 rounded-lg border-2 border-gray-300 hover:bg-gray-50 font-semibold transition-colors"
          >
            Cancel
          </button>
          <button className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200">
            Delete
          </button>
        </div>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table] ? (
        forms[table](type, data)
      ) : (
        <div className="p-4 text-center">
          <p className="text-gray-600">
            {table.charAt(0).toUpperCase() + table.slice(1)} form is coming
            soon!
          </p>
        </div>
      )
    ) : (
      "Form not found!"
    );
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor} hover:opacity-90 transition-opacity shadow-sm hover:shadow-md`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
      {open && (
        <div className="w-screen h-screen fixed left-0 top-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300">
            <div className="sticky top-0 bg-white z-10 flex items-center justify-between p-6 border-b border-gray-100">
              <div className="h-6"></div>
              <button
                className="hover:bg-gray-100 p-2 rounded-lg transition-colors"
                onClick={() => setOpen(false)}
              >
                <Image src="/close.png" alt="" width={16} height={16} />
              </button>
            </div>
            <div className="p-6">
              <Form />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
