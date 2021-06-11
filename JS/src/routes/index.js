const{Router}= require ('express');
const router = Router();

router.get('/',(req,res)=>res.json(
    {message:{
        "Universidad":"UTPL", 
        "Curso": "Procesos de Ingenieria de Software",
        "Alumno":"Alexis Montoya",
        "Período":"Abr/Ago 2021",
        "Lenguaje de programación preferido":"Python",
        "Aspiración PostGraduación":"Tener un Trabajo donde pueda aplicar mis conocimientos, a la vez de fortalecer los mismos"}}));

module.exports=router;