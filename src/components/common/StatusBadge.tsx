import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "paid" | "pending" | "partial" | "active" | "inactive";
}

const statusStyles = {
  paid: {
    bg: "bg-success-light",
    text: "text-success",
    label: "Paid",
  },
  pending: {
    bg: "bg-pending-light",
    text: "text-pending",
    label: "Pending",
  },
  partial: {
    bg: "bg-warning-light",
    text: "text-warning",
    label: "Partial",
  },
  active: {
    bg: "bg-success-light",
    text: "text-success",
    label: "Active",
  },
  inactive: {
    bg: "bg-secondary",
    text: "text-muted-foreground",
    label: "Inactive",
  },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const styles = statusStyles[status];

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        styles.bg,
        styles.text
      )}
    >
      {styles.label}
    </span>
  );
}
