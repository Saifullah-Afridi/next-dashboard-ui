"use client";

import { useEffect, useState } from "react";
import {
  applyTheme,
  getAvailableThemes,
  getCurrentTheme,
  themePresets,
} from "@/lib/themes";
import { Palette, Check } from "lucide-react";

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("default");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Get saved theme
    const savedTheme = getCurrentTheme();
    setCurrentTheme(savedTheme);

    // Detect dark mode
    const darkMode = document.documentElement.classList.contains("dark");
    setIsDark(darkMode);

    // Apply saved theme
    applyTheme(savedTheme, darkMode ? "dark" : "light");
  }, []);

  const handleThemeChange = (themeKey: string) => {
    const mode = isDark ? "dark" : "light";
    applyTheme(themeKey, mode);
    setCurrentTheme(themeKey);
    setIsOpen(false);
  };

  const themes = getAvailableThemes();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-dashboard-hover transition-colors bg-dashboard-card"
        title="Change Theme"
      >
        <Palette className="w-5 h-5" />
        <span className="text-sm font-medium hidden md:inline">
          {themePresets[currentTheme]?.name || "Theme"}
        </span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg z-50 max-h-[400px] overflow-y-auto">
            <div className="p-3 border-b border-border">
              <h3 className="font-semibold text-sm">Choose Theme</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Select a color scheme for your dashboard
              </p>
            </div>

            <div className="p-2">
              {themes.map((theme) => (
                <button
                  key={theme.key}
                  onClick={() => handleThemeChange(theme.key)}
                  className={`w-full flex items-center justify-between p-3 rounded-md hover:bg-accent transition-colors ${
                    currentTheme === theme.key ? "bg-accent" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Color preview */}
                    <div className="flex gap-1">
                      <div
                        className="w-4 h-4 rounded-full border border-border"
                        style={{
                          background: `hsl(${
                            themePresets[theme.key].variables.light[
                              "--brand-primary"
                            ]
                          })`,
                        }}
                      />
                      <div
                        className="w-4 h-4 rounded-full border border-border"
                        style={{
                          background: `hsl(${
                            themePresets[theme.key].variables.light[
                              "--brand-secondary"
                            ]
                          })`,
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium">{theme.name}</span>
                  </div>
                  {currentTheme === theme.key && (
                    <Check className="w-4 h-4 text-primary" />
                  )}
                </button>
              ))}
            </div>

            <div className="p-3 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Theme changes apply instantly and are saved for your account
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
