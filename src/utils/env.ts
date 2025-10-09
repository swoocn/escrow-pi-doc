import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const env = {
  PRODUCTION_URL: process.env.PRODUCTION_URL || ''
};