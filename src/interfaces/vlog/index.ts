import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface VlogInterface {
  id?: string;
  title: string;
  content: string;
  background_music: string;
  user_id?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface VlogGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  background_music?: string;
  user_id?: string;
  organization_id?: string;
}
