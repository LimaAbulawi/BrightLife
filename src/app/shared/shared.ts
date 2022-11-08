//
// ===== File globals.ts    
//
'use strict';

import { HttpHeaders } from "@angular/common/http";
import { LOCALSTORAGE_TOKEN_KEY } from "src/app/app.module";
  

// export const headers = new HttpHeaders()
//     .set('content-type', 'application/json')
//     .set('Authorization', 'Bearer '+localStorage.getItem(LOCALSTORAGE_TOKEN_KEY));


// export const headers2 = new HttpHeaders()
// .set('Authorization', 'Bearer '+localStorage.getItem(LOCALSTORAGE_TOKEN_KEY));

export const headers = new HttpHeaders()
.set('content-type', 'application/json')
.set('mimeType', 'multipart/form-data')
.set('Authorization', 'Bearer ' + localStorage.getItem(LOCALSTORAGE_TOKEN_KEY));

export const headers2 = new HttpHeaders()
.set('Authorization', 'Bearer ' + localStorage.getItem(LOCALSTORAGE_TOKEN_KEY));
