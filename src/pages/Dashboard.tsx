import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { HeaderBanner } from "@/components/dashboard/HeaderBanner";
import { KPICard } from "@/components/dashboard/KPICard";
import {
  RevenueChart,
  StudentDistributionChart,
} from "@/components/dashboard/Charts";
import { RevenueSplitCard } from "@/components/dashboard/RevenueSplitCard";
import {
  Users,
  GraduationCap,
  DollarSign,
  AlertCircle,
  BookOpen,
  Award,
  UserCheck,
} from "lucide-react";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      {/* Header Banner */}
      <HeaderBanner
        title="Welcome to Academy Management"
        subtitle="Track and manage all academy operations"
      />

      {/* KPI Cards */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Total Students"
          value="176"
          subtitle="12 new this month"
          icon={Users}
          variant="primary"
          trend={{ value: 8, isPositive: true }}
        />
        <KPICard
          title="Total Teachers"
          value="24"
          subtitle="All subjects covered"
          icon={GraduationCap}
          variant="success"
        />
        <KPICard
          title="Monthly Revenue"
          value="PKR 600K"
          subtitle="44% collected"
          icon={DollarSign}
          variant="primary"
        />
        <KPICard
          title="Pending Fees"
          value="PKR 180K"
          subtitle="32 students"
          icon={AlertCircle}
          variant="warning"
        />
      </div>

      {/* Secondary Stats */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 card-shadow">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">45</p>
            <p className="text-sm text-muted-foreground">Pre-Medical</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 card-shadow">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success-light">
            <Award className="h-5 w-5 text-success" />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">38</p>
            <p className="text-sm text-muted-foreground">Pre-Engineering</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 card-shadow">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning-light">
            <GraduationCap className="h-5 w-5 text-warning" />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">93</p>
            <p className="text-sm text-muted-foreground">MDCAT/ECAT Prep</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 card-shadow">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
            <UserCheck className="h-5 w-5 text-muted-foreground" />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">85%</p>
            <p className="text-sm text-muted-foreground">Attendance Today</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <RevenueChart />
        <StudentDistributionChart />
      </div>

      {/* Revenue Split */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-border bg-card p-6 card-shadow">
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              Recent Admissions
            </h3>
            <div className="space-y-3">
              {[
                { name: "Ahmed Ali", class: "11th", group: "Pre-Medical", date: "Dec 24" },
                { name: "Sara Khan", class: "12th", group: "Pre-Engineering", date: "Dec 23" },
                { name: "Hassan Raza", class: "MDCAT", group: "Medical", date: "Dec 22" },
                { name: "Fatima Noor", class: "10th", group: "Pre-Medical", date: "Dec 21" },
              ].map((student, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg bg-secondary p-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-medium">
                      {student.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{student.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {student.class} - {student.group}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{student.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <RevenueSplitCard />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
