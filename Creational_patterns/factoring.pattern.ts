class User {
    id: number;
    name: string;
    email: string;
    password: string;
    login() {
        console.log('User logged in');
    }
    clone() {
        const user = new User();
        user.id = this.id;
        user.name = this.name;
        user.email = this.email;
        user.password = this.password;
        return user;
    }
}

class Admin extends User {
    users: User[];
}

class Provider extends User {
    products: object[];

}

class Client extends User {
    provider: Provider;
}

function main() {
    let type: "admin" | "provider" | "client";
    let user: User;
    switch (type) {
        case 'admin':
            user = new Admin();
            break;
        case 'provider':
            user = new Provider();
            break;
        case 'client':
            user = new Client();
            break;
    }
    user.login();
}

function demo() {
    let type: "admin" | "provider" | "client";
    let user: User;
    switch (type) {
        case 'admin':
            user = new Admin();
            user.login();
            break;
        case 'provider':
            user = new Provider();
            user.login();
            break;
        case 'client':
            user = new Client();
            user.login();
            break;
    }
}

demo();