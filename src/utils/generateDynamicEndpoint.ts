export function generateDynamicEndpoint(endpoint: string, values: Record<string, string | number>): string {
  let dynamicEndpoint = endpoint;

  for (const [key, value] of Object.entries(values)) {
    dynamicEndpoint = dynamicEndpoint.replace(`{${key}}`, value.toString());
  }

  return dynamicEndpoint;
}
