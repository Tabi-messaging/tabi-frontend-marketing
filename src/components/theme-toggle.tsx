'use client';

import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={cn(
        'inline-flex rounded-lg border border-border bg-surface-secondary p-0.5',
        className,
      )}
      role="group"
      aria-label="Theme"
    >
      <button
        type="button"
        onClick={() => setTheme('light')}
        className={cn(
          'rounded-md p-1.5 transition-colors',
          theme === 'light'
            ? 'bg-surface text-text-primary shadow-sm'
            : 'text-text-tertiary hover:text-text-secondary',
        )}
        title="Light"
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => setTheme('system')}
        className={cn(
          'rounded-md p-1.5 transition-colors',
          theme === 'system'
            ? 'bg-surface text-text-primary shadow-sm'
            : 'text-text-tertiary hover:text-text-secondary',
        )}
        title="System"
      >
        <Monitor className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => setTheme('dark')}
        className={cn(
          'rounded-md p-1.5 transition-colors',
          theme === 'dark'
            ? 'bg-surface text-text-primary shadow-sm'
            : 'text-text-tertiary hover:text-text-secondary',
        )}
        title="Dark"
      >
        <Moon className="h-4 w-4" />
      </button>
    </div>
  );
}
