# Theme Customization Guide

This dashboard supports dynamic theming, allowing you to customize colors and branding for SaaS multi-tenancy.

## Features

- **7 Built-in Theme Presets**: Default Blue, Ocean Teal, Sunset Orange, Forest Green, Royal Purple, Crimson Red, and Midnight Blue
- **Live Theme Switching**: Change themes instantly without page reload
- **Persistent Themes**: Theme preferences are saved to localStorage
- **Dark Mode Support**: All themes work in both light and dark modes
- **CSS Variables**: All colors use HSL CSS variables for easy customization

## Using the Theme Switcher

The `ThemeSwitcher` component is already integrated into the Navbar. Users can:

1. Click the palette icon in the navbar
2. Select from available theme presets
3. See a live preview with color dots
4. Theme changes are applied instantly and saved

## Programmatic Theme Control

### Apply a Theme Preset

```typescript
import { applyTheme } from "@/lib/themes";

// Apply a theme
applyTheme("ocean", "light"); // or "dark"
```

### Get Current Theme

```typescript
import { getCurrentTheme } from "@/lib/themes";

const currentTheme = getCurrentTheme(); // Returns theme key
```

### Apply Custom Colors

```typescript
import { applyCustomTheme } from "@/lib/themes";

applyCustomTheme({
  "--brand-primary": "200 80% 50%",
  "--brand-secondary": "280 70% 55%",
  "--gradient-from": "200 80% 50%",
  "--gradient-to": "280 70% 55%",
});
```

### Reset to Default

```typescript
import { resetTheme } from "@/lib/themes";

resetTheme();
```

## Available Theme Presets

| Theme Key  | Name          | Primary Color | Secondary Color |
| ---------- | ------------- | ------------- | --------------- |
| `default`  | Default Blue  | Blue          | Purple          |
| `ocean`    | Ocean Teal    | Teal          | Blue            |
| `sunset`   | Sunset Orange | Orange        | Pink            |
| `forest`   | Forest Green  | Green         | Lime            |
| `purple`   | Royal Purple  | Purple        | Violet          |
| `crimson`  | Crimson Red   | Red           | Rose            |
| `midnight` | Midnight Blue | Navy          | Blue            |

## Creating Custom Theme Presets

Add your theme to `src/lib/themes.ts`:

```typescript
export const themePresets: Record<string, ThemeConfig> = {
  // ... existing themes
  custom: {
    name: "Custom Theme",
    variables: {
      light: {
        "--brand-primary": "180 50% 50%",
        "--brand-secondary": "200 60% 55%",
        "--brand-accent": "220 70% 60%",
        "--gradient-from": "180 50% 50%",
        "--gradient-to": "200 60% 55%",
        "--card-student": "180 50% 50%",
        "--card-teacher": "200 60% 55%",
        "--card-parent": "220 70% 60%",
        "--card-staff": "190 55% 52%",
      },
      dark: {
        // Same structure for dark mode
      },
    },
  },
};
```

## Customizable CSS Variables

### Brand Colors

- `--brand-primary`: Main brand color
- `--brand-secondary`: Secondary brand color
- `--brand-accent`: Accent color

### Dashboard Colors

- `--dashboard-bg`: Dashboard background
- `--dashboard-card`: Card backgrounds
- `--dashboard-hover`: Hover state color

### User Card Colors

- `--card-student`: Student card color
- `--card-teacher`: Teacher card color
- `--card-parent`: Parent card color
- `--card-staff`: Staff card color

### Status Colors

- `--success`: Success states
- `--warning`: Warning states
- `--error`: Error states
- `--info`: Info states

### Chart Colors

- `--chart-1` through `--chart-5`: Chart data colors

### Gradient Colors

- `--gradient-from`: Start of gradient
- `--gradient-to`: End of gradient

## Using Theme Colors in Components

### With Tailwind Classes

```tsx
// Brand colors
<div className="bg-brand-primary text-white" />
<div className="border-brand-secondary" />

// Dashboard colors
<div className="bg-dashboard-card hover:bg-dashboard-hover" />

// User card colors
<div className="bg-card-student" />
<div className="bg-card-teacher" />

// Status colors
<div className="text-success" />
<div className="bg-warning" />

// Chart colors
<div className="fill-chart-1" />
```

### With Inline Styles

```tsx
<div style={{ background: "hsl(var(--brand-primary))" }} />
```

## Multi-Tenant Implementation

For SaaS applications with multiple tenants:

### Option 1: Per-User Themes

```typescript
// On user login, apply their saved theme
const userTheme = await fetchUserTheme(userId);
applyTheme(userTheme);
```

### Option 2: Per-Tenant Themes

```typescript
// On tenant context load
const tenantTheme = await fetchTenantTheme(tenantId);
applyTheme(tenantTheme);
```

### Option 3: Custom Tenant Branding

```typescript
// Apply custom brand colors from tenant settings
const tenantBranding = await fetchTenantBranding(tenantId);
applyCustomTheme({
  "--brand-primary": tenantBranding.primaryColor,
  "--brand-secondary": tenantBranding.secondaryColor,
  "--brand-accent": tenantBranding.accentColor,
});
```

## API Integration Example

```typescript
// In your tenant settings page
async function saveTenantTheme(tenantId: string, themeKey: string) {
  await fetch(`/api/tenants/${tenantId}/theme`, {
    method: "PUT",
    body: JSON.stringify({ theme: themeKey }),
  });

  applyTheme(themeKey);
}

// In your layout (server component)
export default async function Layout({ children }) {
  const tenant = await getCurrentTenant();

  return (
    <html>
      <body>
        <ThemeApplier theme={tenant.theme} />
        {children}
      </body>
    </html>
  );
}
```

## Dark Mode Integration

The theming system works seamlessly with Next.js dark mode:

```tsx
"use client";

import { useTheme } from "next-themes";
import { applyTheme, getCurrentTheme } from "@/lib/themes";

export function ThemeController() {
  const { theme } = useTheme(); // "light" or "dark"

  useEffect(() => {
    const currentTheme = getCurrentTheme();
    applyTheme(currentTheme, theme as "light" | "dark");
  }, [theme]);
}
```

## Color Format

All colors use HSL format: `hue saturation% lightness%`

Example: `217 91% 60%` = Blue color

- Hue: 217 (0-360)
- Saturation: 91% (0-100%)
- Lightness: 60% (0-100%)

Use [HSL Color Picker](https://hslpicker.com/) to generate colors.

## Best Practices

1. **Consistent Branding**: Use `--brand-primary` consistently across the app
2. **Accessible Contrast**: Ensure sufficient contrast ratios (WCAG 4.5:1)
3. **Test Both Modes**: Verify themes in both light and dark modes
4. **Performance**: Theme changes are instant with CSS variables
5. **Fallbacks**: Keep original colors as fallbacks during loading

## Troubleshooting

### Theme not applying

- Check if localStorage is enabled
- Verify theme key exists in `themePresets`
- Ensure component is client-side ("use client")

### Colors not updating

- Hard refresh browser (Ctrl+Shift+R)
- Clear localStorage and reapply theme
- Check CSS variable syntax

### Custom theme not saving

- Verify localStorage permissions
- Check browser console for errors
- Ensure valid HSL values

## Example: Theme Settings Page

```tsx
"use client";

import { getAvailableThemes, applyTheme } from "@/lib/themes";

export default function ThemeSettings() {
  const themes = getAvailableThemes();

  return (
    <div className="grid grid-cols-2 gap-4">
      {themes.map((theme) => (
        <button
          key={theme.key}
          onClick={() => applyTheme(theme.key)}
          className="p-4 border rounded-lg hover:border-brand-primary"
        >
          {theme.name}
        </button>
      ))}
    </div>
  );
}
```

## Support

For questions or custom theme requests, refer to the theme configuration in:

- `src/lib/themes.ts` - Theme presets and utilities
- `src/app/globals.css` - CSS variable definitions
- `tailwind.config.ts` - Tailwind color mappings
