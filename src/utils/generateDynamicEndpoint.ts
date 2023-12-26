export function generateDynamicEndpoint(endpoint: string, values: Record<string, string | number>): string {
  let dynamicEndpoint = endpoint;

  console.log("dynamicEndpoint", dynamicEndpoint);
  console.log("values", values);

  for (const [key, value] of Object.entries(values)) {
    dynamicEndpoint = dynamicEndpoint.replace(`:{${key}}`, value.toString());
  }

  console.log(dynamicEndpoint);
  
  return dynamicEndpoint;
}
