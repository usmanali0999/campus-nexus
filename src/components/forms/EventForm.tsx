"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventSchema, type EventFormData } from "@/lib/validators";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

type EventFormProps = {
  onSubmit: (data: EventFormData) => void;
  onCancel: () => void;
  defaultValues?: Partial<EventFormData>;
  isEdit?: boolean;
};

export default function EventForm({
  onSubmit,
  onCancel,
  defaultValues,
  isEdit = false,
}: EventFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input label="Event Title" error={errors.title?.message} {...register("title")} />
      <div className="grid gap-4 md:grid-cols-2">
        <Input label="Date" type="date" error={errors.date?.message} {...register("date")} />
        <Input label="Time" error={errors.time?.message} {...register("time")} />
        <Input label="Venue" error={errors.venue?.message} {...register("venue")} />
        <Input label="Category" error={errors.category?.message} {...register("category")} />
        <Input label="Capacity" type="number" error={errors.capacity?.message} {...register("capacity", { valueAsNumber: true })} />
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
          {isEdit ? "Update Event" : "Create Event"}
        </Button>
      </div>
    </form>
  );
}