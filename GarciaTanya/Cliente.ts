namespace segundoParcial{
    export class Cliente extends Persona{

        private edad:number;
        private sexo:ESexo;

        constructor(id:number, nombre:string, apellido:string, edad:number, sexo:ESexo){
            super(id, nombre, apellido);
            this.edad = edad;
            this.sexo = sexo;
        }

        public getEdad():number{
            return this.edad;
        }

        public setEdad(edad:number){
            this.edad = edad;
        }

        public getSexo():ESexo{
            return this.sexo;
        }

        public setSexo(sexo:ESexo){
            this.sexo = sexo;
        }
        


    }
}