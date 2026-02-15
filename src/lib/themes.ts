/**
 * Theme Configuration for SaaS Multi-tenancy
 * This file contains theme presets that can be applied dynamically
 */

export type ThemeConfig = {
  name: string;
  variables: {
    light: Record<string, string>;
    dark: Record<string, string>;
  };
};

export const themePresets: Record<string, ThemeConfig> = {
  default: {
    name: "Default Blue",
    variables: {
      light: {
        "--brand-primary": "217 91% 60%",
        "--brand-secondary": "271 91% 65%",
        "--brand-accent": "48 96% 53%",
        "--gradient-from": "217 91% 60%",
        "--gradient-to": "271 91% 65%",
        "--card-student": "199 89% 48%",
        "--card-teacher": "271 91% 65%",
        "--card-parent": "38 92% 50%",
        "--card-staff": "350 89% 60%",
        "--sidebar-primary": "217 91% 60%",
        "--sidebar-ring": "217 91% 60%",
        "--sidebar-accent": "217 91% 95%",
      },
      dark: {
        "--brand-primary": "217 91% 60%",
        "--brand-secondary": "271 91% 65%",
        "--brand-accent": "48 96% 53%",
        "--gradient-from": "217 91% 60%",
        "--gradient-to": "271 91% 65%",
        "--card-student": "199 89% 48%",
        "--card-teacher": "271 91% 65%",
        "--card-parent": "38 92% 50%",
        "--card-staff": "350 89% 60%",
        "--sidebar-primary": "217 91% 60%",
        "--sidebar-ring": "217 91% 60%",
        "--sidebar-accent": "217 91% 20%",
      },
    },
  },
  ocean: {
    name: "Ocean Teal",
    variables: {
      light: {
        "--brand-primary": "180 62% 50%",
        "--brand-secondary": "200 76% 55%",
        "--brand-accent": "170 94% 42%",
        "--gradient-from": "180 62% 50%",
        "--gradient-to": "200 76% 55%",
        "--card-student": "180 62% 50%",
        "--card-teacher": "200 76% 55%",
        "--card-parent": "170 94% 42%",
        "--card-staff": "190 70% 48%",
        "--sidebar-primary": "180 62% 50%",
        "--sidebar-ring": "180 62% 50%",
        "--sidebar-accent": "180 62% 95%",
      },
      dark: {
        "--brand-primary": "180 62% 50%",
        "--brand-secondary": "200 76% 55%",
        "--brand-accent": "170 94% 42%",
        "--gradient-from": "180 62% 50%",
        "--gradient-to": "200 76% 55%",
        "--card-student": "180 62% 50%",
        "--card-teacher": "200 76% 55%",
        "--card-parent": "170 94% 42%",
        "--card-staff": "190 70% 48%",
        "--sidebar-primary": "180 62% 50%",
        "--sidebar-ring": "180 62% 50%",
        "--sidebar-accent": "180 62% 20%",
      },
    },
  },
  sunset: {
    name: "Sunset Orange",
    variables: {
      light: {
        "--brand-primary": "25 95% 53%",
        "--brand-secondary": "340 82% 52%",
        "--brand-accent": "45 93% 47%",
        "--gradient-from": "25 95% 53%",
        "--gradient-to": "340 82% 52%",
        "--card-student": "25 95% 53%",
        "--card-teacher": "340 82% 52%",
        "--card-parent": "45 93% 47%",
        "--card-staff": "15 86% 55%",
        "--sidebar-primary": "25 95% 53%",
        "--sidebar-ring": "25 95% 53%",
        "--sidebar-accent": "25 95% 95%",
      },
      dark: {
        "--brand-primary": "25 95% 53%",
        "--brand-secondary": "340 82% 52%",
        "--brand-accent": "45 93% 47%",
        "--gradient-from": "25 95% 53%",
        "--gradient-to": "340 82% 52%",
        "--card-student": "25 95% 53%",
        "--card-teacher": "340 82% 52%",
        "--card-parent": "45 93% 47%",
        "--card-staff": "15 86% 55%",
        "--sidebar-primary": "25 95% 53%",
        "--sidebar-ring": "25 95% 53%",
        "--sidebar-accent": "25 95% 20%",
      },
    },
  },
  forest: {
    name: "Forest Green",
    variables: {
      light: {
        "--brand-primary": "142 76% 36%",
        "--brand-secondary": "88 70% 45%",
        "--brand-accent": "172 66% 50%",
        "--gradient-from": "142 76% 36%",
        "--gradient-to": "88 70% 45%",
        "--card-student": "142 76% 36%",
        "--card-teacher": "88 70% 45%",
        "--card-parent": "172 66% 50%",
        "--card-staff": "160 70% 42%",
        "--sidebar-primary": "142 76% 36%",
        "--sidebar-ring": "142 76% 36%",
        "--sidebar-accent": "142 76% 95%",
      },
      dark: {
        "--brand-primary": "142 76% 36%",
        "--brand-secondary": "88 70% 45%",
        "--brand-accent": "172 66% 50%",
        "--gradient-from": "142 76% 36%",
        "--gradient-to": "88 70% 45%",
        "--card-student": "142 76% 36%",
        "--card-teacher": "88 70% 45%",
        "--card-parent": "172 66% 50%",
        "--card-staff": "160 70% 42%",
        "--sidebar-primary": "142 76% 45%",
        "--sidebar-ring": "142 76% 45%",
        "--sidebar-accent": "142 76% 20%",
      },
    },
  },
  purple: {
    name: "Royal Purple",
    variables: {
      light: {
        "--brand-primary": "271 81% 56%",
        "--brand-secondary": "280 90% 60%",
        "--brand-accent": "291 64% 42%",
        "--gradient-from": "271 81% 56%",
        "--gradient-to": "280 90% 60%",
        "--card-student": "271 81% 56%",
        "--card-teacher": "280 90% 60%",
        "--card-parent": "291 64% 42%",
        "--card-staff": "265 75% 50%",
        "--sidebar-primary": "271 81% 56%",
        "--sidebar-ring": "271 81% 56%",
        "--sidebar-accent": "271 81% 95%",
      },
      dark: {
        "--brand-primary": "271 81% 56%",
        "--brand-secondary": "280 90% 60%",
        "--brand-accent": "291 64% 42%",
        "--gradient-from": "271 81% 56%",
        "--gradient-to": "280 90% 60%",
        "--card-student": "271 81% 56%",
        "--card-teacher": "280 90% 60%",
        "--card-parent": "291 64% 42%",
        "--card-staff": "265 75% 50%",
        "--sidebar-primary": "271 81% 56%",
        "--sidebar-ring": "271 81% 56%",
        "--sidebar-accent": "271 81% 20%",
      },
    },
  },
  crimson: {
    name: "Crimson Red",
    variables: {
      light: {
        "--brand-primary": "348 83% 47%",
        "--brand-secondary": "0 72% 51%",
        "--brand-accent": "340 92% 56%",
        "--gradient-from": "348 83% 47%",
        "--gradient-to": "0 72% 51%",
        "--card-student": "348 83% 47%",
        "--card-teacher": "0 72% 51%",
        "--card-parent": "340 92% 56%",
        "--card-staff": "355 78% 52%",
        "--sidebar-primary": "348 83% 47%",
        "--sidebar-ring": "348 83% 47%",
        "--sidebar-accent": "348 83% 95%",
      },
      dark: {
        "--brand-primary": "348 83% 47%",
        "--brand-secondary": "0 72% 51%",
        "--brand-accent": "340 92% 56%",
        "--gradient-from": "348 83% 47%",
        "--gradient-to": "0 72% 51%",
        "--card-student": "348 83% 47%",
        "--card-teacher": "0 72% 51%",
        "--card-parent": "340 92% 56%",
        "--card-staff": "355 78% 52%",
        "--sidebar-primary": "348 83% 47%",
        "--sidebar-ring": "348 83% 47%",
        "--sidebar-accent": "348 83% 20%",
      },
    },
  },
  midnight: {
    name: "Midnight Blue",
    variables: {
      light: {
        "--brand-primary": "220 90% 56%",
        "--brand-secondary": "235 85% 60%",
        "--brand-accent": "210 100% 60%",
        "--gradient-from": "220 90% 56%",
        "--gradient-to": "235 85% 60%",
        "--card-student": "220 90% 56%",
        "--card-teacher": "235 85% 60%",
        "--card-parent": "210 100% 60%",
        "--card-staff": "225 85% 58%",
        "--sidebar-primary": "220 90% 56%",
        "--sidebar-ring": "220 90% 56%",
        "--sidebar-accent": "220 90% 95%",
      },
      dark: {
        "--brand-primary": "220 90% 56%",
        "--brand-secondary": "235 85% 60%",
        "--brand-accent": "210 100% 60%",
        "--gradient-from": "220 90% 56%",
        "--gradient-to": "235 85% 60%",
        "--card-student": "220 90% 56%",
        "--card-teacher": "235 85% 60%",
        "--card-parent": "210 100% 60%",
        "--card-staff": "225 85% 58%",
        "--sidebar-primary": "220 90% 56%",
        "--sidebar-ring": "220 90% 56%",
        "--sidebar-accent": "220 90% 20%",
      },
    },
  },
};

/**
 * Apply a theme by updating CSS variables
 */
export function applyTheme(themeKey: string, mode: "light" | "dark" = "light") {
  const theme = themePresets[themeKey];
  if (!theme) {
    console.error(`Theme "${themeKey}" not found`);
    return;
  }

  const root = document.documentElement;
  const variables = theme.variables[mode];

  Object.entries(variables).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });

  // Save theme preference
  localStorage.setItem("theme-preset", themeKey);
}

/**
 * Apply custom CSS variables
 */
export function applyCustomTheme(variables: Record<string, string>) {
  const root = document.documentElement;

  Object.entries(variables).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });

  // Save custom theme
  localStorage.setItem("custom-theme", JSON.stringify(variables));
}

/**
 * Get the current theme from localStorage
 */
export function getCurrentTheme(): string {
  if (typeof window === "undefined") return "default";
  return localStorage.getItem("theme-preset") || "default";
}

/**
 * Get custom theme variables from localStorage
 */
export function getCustomTheme(): Record<string, string> | null {
  if (typeof window === "undefined") return null;
  const custom = localStorage.getItem("custom-theme");
  return custom ? JSON.parse(custom) : null;
}

/**
 * Reset to default theme
 */
export function resetTheme() {
  localStorage.removeItem("theme-preset");
  localStorage.removeItem("custom-theme");
  applyTheme("default");
}

/**
 * Get all available theme names
 */
export function getAvailableThemes() {
  return Object.entries(themePresets).map(([key, value]) => ({
    key,
    name: value.name,
  }));
}
