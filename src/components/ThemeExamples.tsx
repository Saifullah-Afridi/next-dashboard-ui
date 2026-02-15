"use client";

/**
 * Theme Usage Examples
 * This file demonstrates all the ways to use the theming system
 */

import { useEffect } from "react";
import { applyTheme, applyCustomTheme, getAvailableThemes } from "@/lib/themes";

// Example 1: Using brand colors with Tailwind classes
export function BrandedButton() {
  return (
    <button className="bg-brand-primary hover:bg-brand-secondary text-white px-4 py-2 rounded-lg transition-colors">
      Primary Brand Button
    </button>
  );
}

// Example 2: Using gradient with brand colors
export function BrandedGradientCard() {
  return (
    <div
      className="p-6 rounded-xl text-white"
      style={{
        background:
          "linear-gradient(to bottom right, hsl(var(--gradient-from)), hsl(var(--gradient-to)))",
      }}
    >
      <h3 className="text-xl font-bold">Gradient Card</h3>
      <p>This uses the theme gradient colors</p>
    </div>
  );
}

// Example 3: Using dashboard colors
export function ThemedDashboardCard() {
  return (
    <div className="bg-dashboard-card hover:bg-dashboard-hover p-6 rounded-lg border border-border transition-colors cursor-pointer">
      <h4 className="font-semibold">Dashboard Card</h4>
      <p className="text-sm text-muted-foreground mt-2">
        This card uses dashboard theme colors
      </p>
    </div>
  );
}

// Example 4: Using user card colors
export function UserTypeCards() {
  const types = [
    { name: "Student", color: "card-student" },
    { name: "Teacher", color: "card-teacher" },
    { name: "Parent", color: "card-parent" },
    { name: "Staff", color: "card-staff" },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {types.map((type) => (
        <div
          key={type.name}
          className="p-4 rounded-lg text-white text-center font-semibold"
          style={{ background: `hsl(var(--${type.color}))` }}
        >
          {type.name}
        </div>
      ))}
    </div>
  );
}

// Example 5: Using status colors
export function StatusBadges() {
  return (
    <div className="flex gap-2">
      <span className="px-3 py-1 rounded-full text-white text-xs font-medium bg-success">
        Success
      </span>
      <span className="px-3 py-1 rounded-full text-white text-xs font-medium bg-warning">
        Warning
      </span>
      <span className="px-3 py-1 rounded-full text-white text-xs font-medium bg-error">
        Error
      </span>
      <span className="px-3 py-1 rounded-full text-white text-xs font-medium bg-info">
        Info
      </span>
    </div>
  );
}

// Example 6: Programmatically change themes
export function ThemeManager() {
  const themes = getAvailableThemes();

  const handleThemeChange = (themeKey: string) => {
    applyTheme(themeKey);
  };

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Theme Manager Example</h3>
      <div className="flex flex-wrap gap-2">
        {themes.map((theme) => (
          <button
            key={theme.key}
            onClick={() => handleThemeChange(theme.key)}
            className="px-4 py-2 bg-dashboard-card hover:bg-dashboard-hover rounded-lg border border-border transition-colors"
          >
            {theme.name}
          </button>
        ))}
      </div>
    </div>
  );
}

// Example 7: Apply custom brand colors
export function CustomBrandingExample() {
  const applyCustomBranding = () => {
    // Example: Apply your company colors
    applyCustomTheme({
      "--brand-primary": "210 100% 50%", // Your primary color
      "--brand-secondary": "340 100% 50%", // Your secondary color
      "--brand-accent": "50 100% 50%", // Your accent color
      "--gradient-from": "210 100% 50%",
      "--gradient-to": "340 100% 50%",
    });
  };

  return (
    <button
      onClick={applyCustomBranding}
      className="px-4 py-2 bg-brand-primary text-white rounded-lg"
    >
      Apply Custom Branding
    </button>
  );
}

// Example 8: Component with dynamic theming
export function ThemedCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      {children}
    </div>
  );
}

// Example 9: Using chart colors
export function ChartColorExample() {
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="w-12 h-12 rounded"
          style={{ background: `hsl(var(--chart-${i}))` }}
        />
      ))}
    </div>
  );
}

// Example 10: Complete themed component
export function CompleteThemedExample() {
  useEffect(() => {
    // Load saved theme on mount
    const savedTheme = localStorage.getItem("theme-preset") || "default";
    applyTheme(savedTheme);
  }, []);

  return (
    <div className="space-y-6 p-6 bg-dashboard-bg min-h-screen">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1
          className="text-4xl font-bold text-center"
          style={{ color: "hsl(var(--brand-primary))" }}
        >
          Theme System Examples
        </h1>

        <ThemedCard>
          <h2 className="text-xl font-bold mb-4">1. Brand Colors</h2>
          <BrandedButton />
        </ThemedCard>

        <ThemedCard>
          <h2 className="text-xl font-bold mb-4">2. Gradient Card</h2>
          <BrandedGradientCard />
        </ThemedCard>

        <ThemedCard>
          <h2 className="text-xl font-bold mb-4">3. Dashboard Card</h2>
          <ThemedDashboardCard />
        </ThemedCard>

        <ThemedCard>
          <h2 className="text-xl font-bold mb-4">4. User Type Cards</h2>
          <UserTypeCards />
        </ThemedCard>

        <ThemedCard>
          <h2 className="text-xl font-bold mb-4">5. Status Badges</h2>
          <StatusBadges />
        </ThemedCard>

        <ThemedCard>
          <h2 className="text-xl font-bold mb-4">6. Theme Manager</h2>
          <ThemeManager />
        </ThemedCard>

        <ThemedCard>
          <h2 className="text-xl font-bold mb-4">7. Custom Branding</h2>
          <CustomBrandingExample />
        </ThemedCard>

        <ThemedCard>
          <h2 className="text-xl font-bold mb-4">8. Chart Colors</h2>
          <ChartColorExample />
        </ThemedCard>
      </div>
    </div>
  );
}

export default CompleteThemedExample;
