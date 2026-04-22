'use client';

import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = dynamic(async () => (await import('swagger-ui-react')).default, {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center p-12 text-sm text-text-secondary">
      Loading API explorer…
    </div>
  ),
});

export type SwaggerRequest = {
  url: string;
  headers: Record<string, string>;
};

export type SwaggerApiExplorerProps = {
  spec: Record<string, unknown> | null;
  /** Public docs: false (browse + snippets only). Dashboard: true with JWT injection. */
  tryItOutEnabled?: boolean;
  requestInterceptor?: (req: SwaggerRequest) => SwaggerRequest;
};

export function SwaggerApiExplorer({
  spec,
  tryItOutEnabled = true,
  requestInterceptor,
}: SwaggerApiExplorerProps) {
  if (!spec) return null;

  return (
    <SwaggerUI
      spec={spec}
      docExpansion="list"
      defaultModelExpandDepth={2}
      tryItOutEnabled={tryItOutEnabled}
      persistAuthorization={tryItOutEnabled}
      requestSnippetsEnabled
      displayRequestDuration={tryItOutEnabled}
      filter
      deepLinking
      supportedSubmitMethods={tryItOutEnabled ? ['get', 'post', 'put', 'patch', 'delete'] : []}
      requestInterceptor={requestInterceptor ?? ((req: SwaggerRequest) => req)}
    />
  );
}
