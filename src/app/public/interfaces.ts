export interface LoginResponse{
    status: boolean;
    code: number;
    msg: string;
    data: {
        token: string;
        user: {
            id: number;
            name: string;
            phone: string;
            email: string;
            image: string;
        }
    }
}


export interface LoginRequest {
    email: string ;
    password : string ;
}

export interface RegisterResponse{
    status: boolean;
    code: number;
    msg: string;
    data: {
        token: string;
        user: {
            id: number;
            name: string;
            last_name: string;
            phone: string;
            email: string;
            image: string;
        }
    }
}

export interface RegisterRequest {
    name : string;
    email: string ;
    password : string ;
    phone : string ;
    last_name : string;
}

// export interface LoginResponse {
//     access_token : string ;
//     user :{
//         id: number;
//         name: string;
//         email: string;
//         email_verified_at?: any;
//         created_at?: any;
//         updated_at?: any;

//     }
// }