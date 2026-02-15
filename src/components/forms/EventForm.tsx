"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";

const schema = z.object({
  title: z.string().min(1, { message: "Event title is required!" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters!" }),
  startDate: z.string().min(1, { message: "Start date is required!" }),
  endDate: z.string().min(1, { message: "End date is required!" }),
  startTime: z.string().min(1, { message: "Start time is required!" }),
  endTime: z.string().min(1, { message: "End time is required!" }),
});

type Inputs = z.infer<typeof schema>;

const EventForm = ({
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
        {type === "create" ? "Create a new event" : "Update event"}
      </h1>
      <div className="flex flex-col gap-4">
        <InputField
          label="Event Title"
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
            rows={3}
            defaultValue={data?.description}
          />
          {errors.description?.message && (
            <p className="text-xs text-red-400">
              {errors.description.message.toString()}
            </p>
          )}
        </div>
        <div className="flex justify-between flex-wrap gap-4">
          <InputField
            label="Start Date"
            name="startDate"
            type="date"
            defaultValue={data?.startDate}
            register={register}
            error={errors?.startDate}
          />
          <InputField
            label="End Date"
            name="endDate"
            type="date"
            defaultValue={data?.endDate}
            register={register}
            error={errors?.endDate}
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
      </div>
      <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default EventForm;
