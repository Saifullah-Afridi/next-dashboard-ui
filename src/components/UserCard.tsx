import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  // Map types to CSS variable names
  const cardColorClass = {
    student: "card-student",
    teacher: "card-teacher",
    parent: "card-parent",
    staff: "card-staff",
  };

  const colorClass =
    cardColorClass[type as keyof typeof cardColorClass] || "card-student";

  return (
    <div className="rounded-2xl bg-dashboard-card hover:bg-dashboard-hover p-6 flex-1 min-w-[150px] hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border border-border relative overflow-hidden group">
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{
          background: `linear-gradient(to bottom right, hsl(var(--${colorClass})), hsl(var(--${colorClass})))`,
          filter: "brightness(0.9)",
        }}
      ></div>
      <div className="flex justify-between items-center relative z-10">
        <span
          className="text-xs px-3 py-1.5 rounded-full font-semibold shadow-sm text-white"
          style={{ background: `hsl(var(--${colorClass}))` }}
        >
          2024/25
        </span>
        <div className="cursor-pointer hover:bg-accent p-1 rounded-full transition-colors">
          <Image src="/more.png" alt="" width={20} height={20} />
        </div>
      </div>
      <div className="mt-6 relative z-10">
        <h1
          className="text-3xl font-bold mb-2"
          style={{ color: `hsl(var(--${colorClass}))` }}
        >
          1,234
        </h1>
        <h2 className="capitalize text-sm font-semibold text-muted-foreground tracking-wide">
          {type}s
        </h2>
      </div>
      <div
        className="absolute bottom-0 right-0 w-20 h-20 opacity-10 rounded-tl-full"
        style={{
          background: `linear-gradient(to bottom right, hsl(var(--${colorClass})), hsl(var(--${colorClass})))`,
        }}
      ></div>
    </div>
  );
};

export default UserCard;
