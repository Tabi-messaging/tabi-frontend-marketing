'use client';

import { useCallback, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

type CodeSampleProps = {
  code: string;
  title?: string;
  language?: string;
  className?: string;
};

export function CodeSample({ code, title, language = 'bash', className }: CodeSampleProps) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async () => {
    const text = code.replace(/\n$/, '');
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [code]);

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-950 text-slate-100 dark:border-slate-700',
        className,
      )}
    >
      <div className="flex items-center justify-between gap-2 border-b border-slate-800 bg-slate-900/80 px-3 py-2">
        <div className="flex min-w-0 items-center gap-2 text-xs text-slate-400">
          {title ? <span className="truncate font-medium text-slate-300">{title}</span> : null}
          <span className="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-slate-500">
            {language}
          </span>
        </div>
        <button
          type="button"
          onClick={() => void copy()}
          className="inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed">
        <code className="font-mono text-slate-100">{code.replace(/\n$/, '')}</code>
      </pre>
    </div>
  );
}
