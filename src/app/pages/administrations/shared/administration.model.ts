import { BaseModel } from "../../../shared/models/base.model";

export class Administration extends BaseModel{

  constructor(
    public name?: string,
    public status?: number
  ){
    super();
  }

  static fromJson(jsonData: any): Administration {
    return Object.assign(new Administration(), jsonData);
  }

}
