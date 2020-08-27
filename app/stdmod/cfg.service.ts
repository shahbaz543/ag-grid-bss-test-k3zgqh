import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CfgService {

  prefix = "https://192.168.89.34:8443/BssCarrier/webservice/";

  constructor(private http: HttpClient) { }

  entity(strentity){
    return this.http.get(this.prefix+strentity+"/entity")
  }

  header(entity, strentity, codapp, codmodulo){
    return this.http.post(this.prefix+"table/header", {entity, strentity, codapp, codmodulo})
  }

  grid(strentity, take = 50, skip = 0, page = 1, pageSize = 50, filter = null, sort = null){
    return this.http.post(this.prefix+strentity+"/grid", {take, skip, page, pageSize, filter, sort})
  }

}