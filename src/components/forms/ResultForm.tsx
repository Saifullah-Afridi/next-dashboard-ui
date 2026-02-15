"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";

const schema = z.object({
  studentId: z.string().min(1, { message: "Student is required!" }),
  examId: z.string().min(1, { message: "Exam is required!" }),
  score: z.coerce
    .number()
    .min(0, { message: "Score must be at least 0!" })
    .max(100, { message: "Score cannot exceed 100!" }),
});

type Inputs = z.infer<typeof schema>;

const ResultForm = ({
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
        {type === "create" ? "Add a new result" : "Update result"}
      </h1>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Student ID"
          name="studentId"
          defaultValue={data?.studentId}
          register={register}
          error={errors?.studentId}
        />
        <InputField
          label="Exam ID"
          name="examId"
          defaultValue={data?.examId}
          register={register}
          error={errors?.examId}
        />
        <InputField
          label="Score"
          name="score"
          type="number"
          defaultValue={data?.score}
          register={register}
          error={errors?.score}
        />
      </div>
      <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default ResultForm;
