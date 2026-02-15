"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";

const schema = z.object({
  title: z.string().min(1, { message: "Title is required!" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters!" }),
  dueDate: z.string().min(1, { message: "Due date is required!" }),
  lessonId: z.string().min(1, { message: "Lesson is required!" }),
});

type Inputs = z.infer<typeof schema>;

const AssignmentForm = ({
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
        {type === "create" ? "Create a new assignment" : "Update assignment"}
      </h1>
      <div className="flex flex-col gap-4">
        <InputField
          label="Assignment Title"
          name="title"
          defaultValue={data?.title}
          register={register}
          error={errors?.title}
        />
        <div className="flex flex-col gap-2 w-full">
          <label className="text-xs text-gray-500">Description</label>
          <textarea
            {...register("description")}
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            rows={4}
            defaultValue={data?.description}
          />
          {errors.description?.message && (
            <p className="text-xs text-red-400">
              {errors.description.message.toString()}
            </p>
          )}
        </div>
        <InputField
          label="Due Date"
          name="dueDate"
          type="date"
          defaultValue={data?.dueDate}
          register={register}
          error={errors?.dueDate}
        />
      </div>
      <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default AssignmentForm;
