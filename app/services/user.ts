import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    userId: string;
    username: string;
    email: string;

    setUserId(value) {
        this.userId = value;
        return true;
    }

    getUserId() {
        return this.userId;
    }


}