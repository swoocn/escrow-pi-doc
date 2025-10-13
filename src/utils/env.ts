import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const env = {
  PORT: process.env.PORT || 4000,
  DOC_ENV: process.env.DOC_ENV || 'development',
  PRODUCTION_URL: process.env.PRODUCTION_URL || '',
  SENTRY_DSN: process.env.SENTRY_DSN
};