import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const apiToken = process.env.ONE_API_TOKEN || ""; // Add fallback for API token

export const translateText = async (
  source: string,
  target: string,
  text: string
): Promise<string> => {
  const config = {
    method: "post",
    url: "https://api.one-api.ir/translate/v1/google/",
    headers: {
      "one-api-token": apiToken,
      "Content-Type": "application/json",
    },
    data: JSON.stringify({ source, target, text }),
  };

  try {
    const response = await axios.request(config);
    return response.data.result; // Return the translated text
  } catch (error) {
    console.error("Translation error:", error);
    throw new Error("Failed to translate text");
  }
};
