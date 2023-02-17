import { prisma } from "@/prisma";
import { NextApiRequest, NextApiResponse } from "next";



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    let classes = [
        {course: 'Sistemas Informáticos', year: 1},
        {course: 'Turismo', year: 1},
        {course: 'Comércio', year: 1},
        {course: 'Multimédia', year: 1},
        {course: 'Comunicação', year: 1},
        {course: 'Fotográfia', year: 1},
        {course: 'Sistemas Informáticos', year: 2},
        {course: 'Turismo', year: 2},
        {course: 'Comércio', year: 2},
        {course: 'Multimédia', year: 2},
        {course: 'Comunicação', year: 2},
        {course: 'Fotográfia', year: 2},
        {course: 'Sistemas Informáticos', year: 3},
        {course: 'Turismo', year: 3},
        {course: 'Comércio', year: 3},
        {course: 'Multimédia', year: 3},
        {course: 'Comunicação', year: 3},
        {course: 'Fotográfia', year: 3},
    ]

    // prisma.classes.createMany({
    //     data: classes
    // }).then(() => console.log("OK"))
    // .catch((err:any) => { res.status(200).json({ err })})

    // prisma.user.create({
    //     data: {
    //         first_name: 'Abyner',
    //         last_name: 'Rocha',
    //         email: 'a101051@epinfante.com',
    //         password: '123123',
    //         classesId: 7
    //     }
    // }).then(() => console.log("OK"))
    // .catch((err:any) => { res.status(200).json({ err })})

    return res.status(200).send("OK")  
}
