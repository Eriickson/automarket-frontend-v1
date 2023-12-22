import axios from "axios";

type GetIpInfoParams = {
  ip: string;
};

const token = "2ec14f502c2f24";

type GetIpInfoResponse = {
  city: string;
  country: string;
  hostname: string;
  ip: string;
  loc: string;
  org: string;
  postal: string;
  region: string;
  timezone: string;
};

export async function getIpInfo({ ip }: GetIpInfoParams): Promise<GetIpInfoResponse> {
  const response = await axios.get(`https://ipinfo.io/${ip}?token=${token}`);

  return response.data;
}
