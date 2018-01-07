import { Component } from '@angular/core';

@Component({
    selector: 'login-screen',
    template: `
        <div class="login">
            <form method="POST">
                <input type="text" name="login"><br>
                <input type="password" name="passphrase" type="password">
                <button type="submit" name="send">Entrar</button>
            </form>
        </div>
    `
})
export class LoginComponent { }
