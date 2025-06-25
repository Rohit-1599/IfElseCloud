import { Status } from './enums.model';
import { Name } from './name.model';
import { Role } from './role.model';
import { Team } from './team.model';

export interface UserData {
  grid_columns: GridColumn[];
  grid_data: GridData[];
}

export interface GridColumn {
  column_key: string;
  column_name: string;
  type: string;
  align: string;
}

export interface GridData {
  id: string;
  name: Name;
  status: Status;
  email: string;
  role: Role;
  license_used: number;
  teams: Team[];
}
