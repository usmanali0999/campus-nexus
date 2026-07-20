import Card from "@/components/ui/Card";
import PageHeader from "@/components/shared/PageHeader";

type ModulePageProps = {
  title: string;
  description: string;
};

export default function ModulePage({
  title,
  description,
}: ModulePageProps) {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Module Workspace"
        title={title}
        description={description}
      />

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <p className="text-sm text-slate-400">Status</p>
          <h3 className="mt-3 text-xl font-semibold text-white">Frontend Ready</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            This module shell is prepared for API integration, data tables,
            filters, and role-based actions.
          </p>
        </Card>

        <Card>
          <p className="text-sm text-slate-400">Architecture</p>
          <h3 className="mt-3 text-xl font-semibold text-white">Scalable Structure</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Designed to support backend services, analytics, audit logs, and
            domain-specific workflows.
          </p>
        </Card>

        <Card>
          <p className="text-sm text-slate-400">Next Step</p>
          <h3 className="mt-3 text-xl font-semibold text-white">CRUD + API Layer</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Next phase me hum forms, tables, search, pagination, and server data
            connect karenge.
          </p>
        </Card>
      </div>
    </div>
  );
}