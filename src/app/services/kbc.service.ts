import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class KbcService {

  constructor(private readonly http:HttpClient) { }
}
