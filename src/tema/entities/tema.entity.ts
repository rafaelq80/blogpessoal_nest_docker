import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";

@Entity({name: "tb_temas"})
export class Tema {

    @PrimaryGeneratedColumn()  
    @ApiProperty()   
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty() 
    descricao: string

    @ApiProperty() 
    @OneToMany(() => Postagem, (postagem) => postagem.tema)
    postagem: Postagem[]
    
}