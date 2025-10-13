import * as SentryNode from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";
import { env } from "../utils/env";

const isSentryEnabled = !!env.SENTRY_DSN;

if (isSentryEnabled) {
  SentryNode.init({
    dsn: env.SENTRY_DSN,
    integrations: [
      nodeProfilingIntegration()
    ],
    tracesSampleRate: 1.0,
    profilesSampleRate: 1.0,
    environment: env.DOC_ENV || "development",
    enableLogs: true,
  });
  console.log("✅ Sentry logging initialized");
} else {
  console.log("⚠️ Sentry DSN not provided - Sentry logging disabled");
}

// Export the initialized SDK
export const Sentry = SentryNode;
export { isSentryEnabled };