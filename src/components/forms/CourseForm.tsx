"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { courseSchema, type CourseFormData } from "@/lib/validators";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

type CourseFormProps = {
  onSubmit: (data: CourseFormData) => void;
  onCancel: () => void;
  defaultValues?: Partial<CourseFormData>;
  isEdit?: boolean;
};

export default function CourseForm({
  onSubmit,
  onCancel,
  defaultValues,
  isEdit = false,
}: CourseFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CourseFormData>({
    resolver: zodResolver(courseSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Input label="Course Code" error={errors.code?.message} {...register("code")} />
        <Input label="Course Title" error={errors.title?.message} {...register("title")} />
        <Input label="Department" error={errors.department?.message} {...register("department")} />
        <Input label="Credit Hours" type="number" error={errors.creditHours?.message} {...register("creditHours", { valueAsNumber: true })} />
        <Input label="Instructor" error={errors.instructor?.message} {...register("instructor")} />
        <Input label="Capacity" type="number" error={errors.capacity?.message} {...register("capacity", { valueAsNumber: true })} />
      </div>
      <div className="flex justify-end gap-3 pt-4">
        <Button type="button" variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button type="submit" disabled={isSubmitting}>
          {isEdit ? "Update Course" : "Add Course"}
        </Button>
      </div>
    </form>
  );
}