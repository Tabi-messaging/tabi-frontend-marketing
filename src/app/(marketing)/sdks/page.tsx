import Link from 'next/link';
import { APP_DISPLAY_NAME } from '@/lib/branding';
import { SDK_LINKS } from '@/lib/sdk-links';
import { MarketingLandingNav } from '@/components/marketing/marketing-landing-nav';

export const metadata = {
  title: `Official SDKs — ${APP_DISPLAY_NAME}`,
  description:
    'JavaScript and PHP SDKs for the Tabi WhatsApp Business Messaging API. Install via npm or Composer; reference documentation ships inside each package.',
};

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm leading-relaxed text-slate-100">
      <code>{children}</code>
    </pre>
  );
}

const JS_INSTALL = `npm install tabi-sdk`;

const JS_EXAMPLE = `import { TabiClient } from 'tabi-sdk';

const tabi = new TabiClient({
  apiKey: 'tk_your_api_key',
  baseUrl: 'https://api.tabi.africa/api/v1',
});

// List channels
const channels = await tabi.channels.list();

// Send a WhatsApp message
await tabi.messages.send('channel-id', {
  to: '2348012345678',
  content: 'Hello from Tabi!',
});`;

const PHP_INSTALL = `composer require tabi/sdk`;

const PHP_EXAMPLE = `<?php

use Tabi\\SDK\\TabiClient;

$tabi = new TabiClient(
    'tk_your_api_key',
    'https://api.tabi.africa/api/v1'
);

// List channels
$channels = $tabi->channels()->list();

// Send a WhatsApp message
$tabi->messages()->send('channel-id', [
    'to' => '2348012345678',
    'content' => 'Hello from Tabi!',
]);`;

export default function SdksPage() {
  return (
    <>
      <MarketingLandingNav />

      {/* Hero */}
      <section className="border-b border-slate-200/80 bg-gradient-to-b from-brand-50/40 to-white py-20 dark:border-slate-800 dark:from-brand-950/20 dark:to-slate-950">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Official SDKs
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Ship faster with production-ready client libraries for JavaScript and PHP.
            Full coverage of the {APP_DISPLAY_NAME} API with zero external dependencies.
          </p>
        </div>
      </section>

      {/* SDK Cards */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
          {/* JavaScript SDK */}
          <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-2xl dark:bg-yellow-900/40">
                <span aria-hidden>JS</span>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                  JavaScript / TypeScript
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">tabi-sdk on npm</p>
              </div>
            </div>

            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Install
              </p>
              <CodeBlock>{JS_INSTALL}</CodeBlock>
            </div>

            <div className="flex-1">
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Quick start
              </p>
              <CodeBlock>{JS_EXAMPLE}</CodeBlock>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                The npm package exports TypeScript types for request bodies (for example{' '}
                <code className="rounded bg-slate-100 px-1 font-mono dark:bg-slate-800">CreateApiKeyPayload</code>,{' '}
                <code className="rounded bg-slate-100 px-1 font-mono dark:bg-slate-800">ChannelSendPayload</code>) and
                JSDoc on methods for IDE parameter hints. Cross-check the{' '}
                <Link href="/api-docs" className="font-medium text-brand-600 hover:underline">
                  public API docs
                </Link>{' '}
                for full request and response schemas.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-5 dark:border-slate-800">
              <a
                href={SDK_LINKS.npm}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-700"
              >
                View on npm
              </a>
            </div>
          </div>

          {/* PHP SDK */}
          <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-2xl dark:bg-indigo-900/40">
                <span aria-hidden>PHP</span>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                  PHP
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">tabi/sdk on Packagist</p>
              </div>
            </div>

            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Install
              </p>
              <CodeBlock>{PHP_INSTALL}</CodeBlock>
            </div>

            <div className="flex-1">
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Quick start
              </p>
              <CodeBlock>{PHP_EXAMPLE}</CodeBlock>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Install: <code className="rounded bg-slate-100 px-1 font-mono dark:bg-slate-800">composer require tabi/sdk</code>.
                Full method reference: <code className="rounded bg-slate-100 px-1 font-mono dark:bg-slate-800">vendor/tabi/sdk/README.md</code>{' '}
                (includes hosted OTP: <code className="rounded bg-slate-100 px-1 font-mono dark:bg-slate-800">sendOtp</code>,{' '}
                <code className="rounded bg-slate-100 px-1 font-mono dark:bg-slate-800">verifyOtp</code>). Product overview:{' '}
                <a
                  href={SDK_LINKS.productSdks}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-600 hover:underline dark:text-brand-400"
                >
                  tabi.africa/sdks
                </a>
                .
              </p>
            </div>

            <div className="border-t border-slate-100 pt-5 dark:border-slate-800">
              <a
                href={SDK_LINKS.packagist}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-700"
              >
                View on Packagist
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Covered endpoints */}
      <section className="border-t border-slate-200/80 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 dark:text-white">
            Full API coverage
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              'Auth',
              'Channels',
              'Messages',
              'Contacts',
              'Conversations',
              'Webhooks',
              'API Keys',
              'Files',
              'Campaigns',
              'Automation Templates',
              'Automation Installs',
              'Quick Replies',
              'Analytics',
              'Notifications',
              'Integrations',
              'Workspaces',
            ].map((name) => (
              <div
                key={name}
                className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {name}
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
            Every REST path is described in OpenAPI at{' '}
            <Link href="/api-docs" className="font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400">
              /api-docs
            </Link>
            . The dashboard API reference includes <strong>Try it out</strong> for authenticated sessions.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-6 py-10 text-center text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
        &copy; {new Date().getFullYear()} {APP_DISPLAY_NAME}. All rights reserved.
      </footer>
    </>
  );
}
