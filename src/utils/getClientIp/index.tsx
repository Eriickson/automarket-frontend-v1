import axios from "axios";

type GetClientIpResponse = {
  ip: string;
};

export async function getClientIp(): Promise<GetClientIpResponse> {
  const response = await axios.get("https://api.ipify.org/?format=json");

  return response.data;
}
