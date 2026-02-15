"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";

const schema = z.object({
  title: z.string().min(1, { message: "Title is required!" }),
  startDate: z.string().min(1, { message: "Start date is required!" }),
  startTime: z.string().min(1, { message: "Start time is required!" }),
  endTime: z.string().min(1, { message: "End time is required!" }),
  lessonId: z.string().min(1, { message: "Lesson is required!" }),
});

type Inputs = z.infer<typeof schema>;

const ExamForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create a new exam" : "Update exam"}
      </h1>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Exam Title"
          name="title"
          defaultValue={data?.title}
          register={register}
          error={errors?.title}
        />
        <InputField
          label="Start Date"
          name="startDate"
          type="date"
          defaultValue={data?.startDate}
          register={register}
          error={errors?.startDate}
        />
        <InputField
          label="Start Time"
          name="startTime"
          type="time"
          defaultValue={data?.startTime}
          register={register}
          error={errors?.startTime}
        />
        <InputField
          label="End Time"
          name="endTime"
          type="time"
          defaultValue={data?.endTime}
          register={register}
          error={errors?.endTime}
        />
      </div>
      <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default ExamForm;
