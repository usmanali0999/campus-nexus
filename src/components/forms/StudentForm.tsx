"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentSchema, type StudentFormData } from "@/lib/validators";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

type StudentFormProps = {
  onSubmit: (data: StudentFormData) => void;
  onCancel: () => void;
  defaultValues?: Partial<StudentFormData>;
  isEdit?: boolean;
};

export default function StudentForm({
  onSubmit,
  onCancel,
  defaultValues,
  isEdit = false,
}: StudentFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<StudentFormData>({
    resolver: zodResolver(studentSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Input label="Full Name" error={errors.name?.message} {...register("name")} />
        <Input label="Email" type="email" error={errors.email?.message} {...register("email")} />
        <Input label="Phone" error={errors.phone?.message} {...register("phone")} />
        <Input label="Department" error={errors.department?.message} {...register("department")} />
        <Input label="Program" error={errors.program?.message} {...register("program")} />
        <Input label="Semester" type="number" error={errors.semester?.message} {...register("semester", { valueAsNumber: true })} />
      </div>
      <div className="flex justify-end gap-3 pt-4">
        <Button type="button" variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button type="submit" disabled={isSubmitting}>
          {isEdit ? "Update Student" : "Add Student"}
        </Button>
      </div>
    </form>
  );
}