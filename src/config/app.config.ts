interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Child User'],
  tenantRoles: ['Content Creator'],
  tenantName: 'Organization',
  applicationName: 'Azlaan',
  addOns: ['file'],
};
