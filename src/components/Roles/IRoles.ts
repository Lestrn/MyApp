interface IUser {
    id: number;
    login: string;
    email: string;
    updated_at: string; 
    inserted_at: string; 
    role_id: number;
  }
  
  interface IOperator {
    id: number;
    name: string;
    updated_at: string; 
    inserted_at: string; 
  }
  
  export interface IRole {
    id: number;
    name: string;
    operator?: IOperator | null; 
    users?: IUser[] | null;
    updated_at: string; 
    inserted_at: string; 
    permission: number;
  }
  
export interface IRolesResponse {
    roles: IRole[];
  }
  