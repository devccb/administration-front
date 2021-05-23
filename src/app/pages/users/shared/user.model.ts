import { BaseModel } from "../../../shared/models/base.model";

export class User extends BaseModel{
  constructor(
    public name?: string,
    public email?: string,
    public login?: string,
    public password?: string,
    public status?: number
  ){
    super();
  }
}
