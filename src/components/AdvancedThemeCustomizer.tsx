"use client";

import { useState, useEffect } from "react";
import { applyCustomTheme, getCustomTheme, resetTheme } from "@/lib/themes";
import { Paintbrush, RotateCcw, Save, X } from "lucide-react";

interface ColorVariable {
  key: string;
  label: string;
  value: string;
}

export default function AdvancedThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const [colors, setColors] = useState<ColorVariable[]>([
    { key: "--brand-primary", label: "Primary Brand", value: "217 91% 60%" },
    {
      key: "--brand-secondary",
      label: "Secondary Brand",
      value: "271 91% 65%",
    },
    { key: "--brand-accent", label: "Accent Color", value: "48 96% 53%" },
    { key: "--gradient-from", label: "Gradient Start", value: "217 91% 60%" },
    { key: "--gradient-to", label: "Gradient End", value: "271 91% 65%" },
    { key: "--sidebar-primary", label: "Sidebar Active", value: "217 91% 60%" },
    { key: "--sidebar-ring", label: "Sidebar Focus", value: "217 91% 60%" },
    { key: "--sidebar-accent", label: "Sidebar Hover", value: "217 91% 95%" },
    { key: "--card-student", label: "Student Card", value: "199 89% 48%" },
    { key: "--card-teacher", label: "Teacher Card", value: "271 91% 65%" },
    { key: "--card-parent", label: "Parent Card", value: "38 92% 50%" },
    { key: "--card-staff", label: "Staff Card", value: "350 89% 60%" },
  ]);

  useEffect(() => {
    // Load custom theme from localStorage
    const custom = getCustomTheme();
    if (custom) {
      setColors((prevColors) =>
        prevColors.map((color) => ({
          ...color,
          value: custom[color.key] || color.value,
        })),
      );
    }
  }, []);

  const handleColorChange = (key: string, value: string) => {
    setColors((prevColors) =>
      prevColors.map((color) =>
        color.key === key ? { ...color, value } : color,
      ),
    );
  };

  const handleApply = () => {
    const variables = colors.reduce(
      (acc, color) => {
        acc[color.key] = color.value;
        return acc;
      },
      {} as Record<string, string>,
    );
    applyCustomTheme(variables);
  };

  const handleReset = () => {
    resetTheme();
    setColors([
      { key: "--brand-primary", label: "Primary Brand", value: "217 91% 60%" },
      {
        key: "--brand-secondary",
        label: "Secondary Brand",
        value: "271 91% 65%",
      },
      { key: "--brand-accent", label: "Accent Color", value: "48 96% 53%" },
      { key: "--gradient-from", label: "Gradient Start", value: "217 91% 60%" },
      { key: "--gradient-to", label: "Gradient End", value: "271 91% 65%" },
      {
        key: "--sidebar-primary",
        label: "Sidebar Active",
        value: "217 91% 60%",
      },
      { key: "--sidebar-ring", label: "Sidebar Focus", value: "217 91% 60%" },
      { key: "--sidebar-accent", label: "Sidebar Hover", value: "217 91% 95%" },
      { key: "--card-student", label: "Student Card", value: "199 89% 48%" },
      { key: "--card-teacher", label: "Teacher Card", value: "271 91% 65%" },
      { key: "--card-parent", label: "Parent Card", value: "38 92% 50%" },
      { key: "--card-staff", label: "Staff Card", value: "350 89% 60%" },
    ]);
  };

  const parseHSL = (hsl: string) => {
    const parts = hsl.split(" ");
    return {
      h: parseInt(parts[0]) || 0,
      s: parseInt(parts[1]) || 0,
      l: parseInt(parts[2]) || 0,
    };
  };

  const formatHSL = (h: number, s: number, l: number) => {
    return `${h} ${s}% ${l}%`;
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-brand-primary text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
        title="Customize Theme"
      >
        <Paintbrush className="w-6 h-6" />
      </button>
    );
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={() => setIsOpen(false)}
      />

      {/* Panel */}
      <div className="fixed right-0 top-0 bottom-0 w-full md:w-[500px] bg-card border-l border-border shadow-2xl z-50 overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold">Advanced Theme Customizer</h2>
            <p className="text-xs text-muted-foreground mt-1">
              Fine-tune your brand colors
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Info */}
          <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-900 dark:text-blue-100">
              Customize your dashboard colors using HSL values. Changes are
              applied instantly and saved to your browser.
            </p>
          </div>

          {/* Color Controls */}
          {colors.map((color) => {
            const hsl = parseHSL(color.value);
            return (
              <div key={color.key} className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">{color.label}</label>
                  <div
                    className="w-10 h-10 rounded-lg border-2 border-border shadow-sm"
                    style={{ background: `hsl(${color.value})` }}
                  />
                </div>

                {/* Hue */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-muted-foreground">Hue</span>
                    <span className="text-xs font-mono">{hsl.h}°</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={hsl.h}
                    onChange={(e) =>
                      handleColorChange(
                        color.key,
                        formatHSL(parseInt(e.target.value), hsl.s, hsl.l),
                      )
                    }
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, 
                        hsl(0, ${hsl.s}%, ${hsl.l}%),
                        hsl(60, ${hsl.s}%, ${hsl.l}%),
                        hsl(120, ${hsl.s}%, ${hsl.l}%),
                        hsl(180, ${hsl.s}%, ${hsl.l}%),
                        hsl(240, ${hsl.s}%, ${hsl.l}%),
                        hsl(300, ${hsl.s}%, ${hsl.l}%),
                        hsl(360, ${hsl.s}%, ${hsl.l}%)
                      )`,
                    }}
                  />
                </div>

                {/* Saturation */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-muted-foreground">
                      Saturation
                    </span>
                    <span className="text-xs font-mono">{hsl.s}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={hsl.s}
                    onChange={(e) =>
                      handleColorChange(
                        color.key,
                        formatHSL(hsl.h, parseInt(e.target.value), hsl.l),
                      )
                    }
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, 
                        hsl(${hsl.h}, 0%, ${hsl.l}%),
                        hsl(${hsl.h}, 100%, ${hsl.l}%)
                      )`,
                    }}
                  />
                </div>

                {/* Lightness */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-muted-foreground">
                      Lightness
                    </span>
                    <span className="text-xs font-mono">{hsl.l}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={hsl.l}
                    onChange={(e) =>
                      handleColorChange(
                        color.key,
                        formatHSL(hsl.h, hsl.s, parseInt(e.target.value)),
                      )
                    }
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, 
                        hsl(${hsl.h}, ${hsl.s}%, 0%),
                        hsl(${hsl.h}, ${hsl.s}%, 50%),
                        hsl(${hsl.h}, ${hsl.s}%, 100%)
                      )`,
                    }}
                  />
                </div>

                {/* HSL Value Display */}
                <div className="p-2 bg-muted rounded text-xs font-mono text-center">
                  {color.value}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-card border-t border-border p-4 flex gap-3">
          <button
            onClick={handleReset}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-muted hover:bg-accent rounded-lg transition-colors font-medium"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
          <button
            onClick={() => {
              handleApply();
              setIsOpen(false);
            }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-brand-primary text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            <Save className="w-4 h-4" />
            Apply & Save
          </button>
        </div>
      </div>
    </>
  );
}
