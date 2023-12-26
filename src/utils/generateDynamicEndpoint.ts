export function generateDynamicEndpoint(endpoint: string, ...values: string[]): string {
  console.log(values);
  console.log(endpoint);

  let dynamicEndpoint = endpoint;

  const placeholders = dynamicEndpoint.match(/\/:[^\/]+(?=\/|$)/g) || [];

  placeholders.forEach((placeholder, index) => {
    const replacement = `/${values[index]}`;
    dynamicEndpoint = dynamicEndpoint.replace(placeholder, replacement);
  });

  console.log(dynamicEndpoint);

  return dynamicEndpoint;
}
