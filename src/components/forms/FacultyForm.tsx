"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { facultySchema, type FacultyFormData } from "@/lib/validators";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

type FacultyFormProps = {
  onSubmit: (data: FacultyFormData) => void;
  onCancel: () => void;
  defaultValues?: Partial<FacultyFormData>;
  isEdit?: boolean;
};

export default function FacultyForm({
  onSubmit,
  onCancel,
  defaultValues,
  isEdit = false,
}: FacultyFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FacultyFormData>({
    resolver: zodResolver(facultySchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Input label="Full Name" error={errors.name?.message} {...register("name")} />
        <Input label="Email" type="email" error={errors.email?.message} {...register("email")} />
        <Input label="Phone" error={errors.phone?.message} {...register("phone")} />
        <Input label="Department" error={errors.department?.message} {...register("department")} />
        <Input label="Designation" error={errors.designation?.message} {...register("designation")} />
        <Input label="Specialization" error={errors.specialization?.message} {...register("specialization")} />
      </div>
      <div className="flex justify-end gap-3 pt-4">
        <Button type="button" variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button type="submit" disabled={isSubmitting}>
          {isEdit ? "Update Faculty" : "Add Faculty"}
        </Button>
      </div>
    </form>
  );
}