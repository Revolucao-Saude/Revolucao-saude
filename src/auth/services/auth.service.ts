import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsuarioService } from "../../usuario/services/usuario.service";
import { Bcrypt } from "../bcrypt/bcrypt";

@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService,
        private bcrypt: Bcrypt
        ){}

    async validateUser(username: string, password: string): Promise<any>{
        const buscaUsuario = await this.usuarioService.findByUsername(username);
        
        if(!buscaUsuario)
            throw new HttpException("Usuário não Encontrado!", HttpStatus.NOT_FOUND);

        const match = await this.bcrypt.compararSenhas(buscaUsuario.senha, password)
console.log(match);

        if(buscaUsuario && match) {
            const {senha, ...result} = buscaUsuario
            return result;
        }

        return null;
    }

    async login(usuarioLogin: any) {
        const payload = {
            username: usuarioLogin.usuario,
            sub: 'revolucaosaude'
        };

        return{
            usuario: usuarioLogin.usuario,
            token:`Bearer ${this.jwtService.sign(payload)}`
        }
    }
}
