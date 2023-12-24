import axios from "axios";

type GetClientIpResponse = {
  clientIp: string;
};

export async function getClientIp(): Promise<GetClientIpResponse> {
  const response = await axios.get("https://api.ipify.org/?format=json");

  return { clientIp: response.data.ip };
}
