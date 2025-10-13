import axios from "axios";
import { env } from "../utils/env";

const webhookUrl = env.DISCORD_WEBHOOK;

// Define colors for different log levels
const colorMap: Record<string, number> = {
  info: 0xE0E0E0,     // near white
  warning: 0xFFA500,  // orange
  error: 0xFF0000,    // red
};

export const sendDiscordNotification = async (
  title: string, 
  description: string, 
  level: "info" | "warning" | "error" = "info"
): Promise<void> => {
  if (!webhookUrl) {
    console.warn("⚠️ Discord Webhook URL not configured. Skipping notification.");
    return;
  }

  const color = colorMap[level] || colorMap.info;

  try {
    await axios.post(webhookUrl, {
      embeds: [
        {
          title: `📢 ${title}`,
          description,
          color,
          timestamp: new Date().toISOString(),
        },
      ],
    });
  } catch (err) {
    console.error("Failed to send Discord notification:", err);
  }
};
