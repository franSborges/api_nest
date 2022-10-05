/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Exclude } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsNameUserAlreadyExists } from "./decorators/is-name-user-already-exists.validator";

/* eslint-disable prettier/prettier */
export class User {
  id: number;
  
  @IsNameUserAlreadyExists({
    message: "O nome de usuáriojá está em uso"
  })
  
  @IsNotEmpty({
   message: 'Nome de usuário é obrigatório.'
  })
  @IsString({
   message: 'Nome de usuário precisar ser uma string'
  })
  username: string;
  
  
  @Exclude({
    toPlainOnly: true
  })
  @IsNotEmpty({
    message: 'Senha é obrigatório.'
  })
  password: string;

  @IsEmail({
    message: 'Email precisa ser um endereço de email válido.'
  })
  email: string;

  @IsNotEmpty({
    message: 'Nome completo é obrigatório'
  })
  last_name: string;
  created_at: Date;
}