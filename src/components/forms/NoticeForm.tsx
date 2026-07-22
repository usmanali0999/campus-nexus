"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { noticeSchema, type NoticeFormData } from "@/lib/validators";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

type NoticeFormProps = {
  onSubmit: (data: NoticeFormData) => void;
  onCancel: () => void;
  defaultValues?: Partial<NoticeFormData>;
  isEdit?: boolean;
};

export default function NoticeForm({
  onSubmit,
  onCancel,
  defaultValues,
  isEdit = false,
}: NoticeFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NoticeFormData>({
    resolver: zodResolver(noticeSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input label="Title" error={errors.title?.message} {...register("title")} />
      <div className="grid gap-4 md:grid-cols-2">
        <Input label="Category" error={errors.category?.message} {...register("category")} />
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-200">Priority</label>
          <select
            className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none focus:border-blue-400/60"
            {...register("priority")}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          {errors.priority && <p className="text-xs text-red-400">{errors.priority.message}</p>}
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-200">Description</label>
        <textarea
          rows={4}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-400/60"
          {...register("description")}
        />
        {errors.description && <p className="text-xs text-red-400">{errors.description.message}</p>}
      </div>
      <div className="flex justify-end gap-3 pt-4">
        <Button type="button" variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button type="submit" disabled={isSubmitting}>
          {isEdit ? "Update Notice" : "Publish Notice"}
        </Button>
      </div>
    </form>
  );
}