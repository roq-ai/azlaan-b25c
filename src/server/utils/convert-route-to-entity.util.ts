const mapping: Record<string, string> = {
  organizations: 'organization',
  users: 'user',
  vlogs: 'vlog',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
