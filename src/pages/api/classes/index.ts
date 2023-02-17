import { prisma } from "@/prisma";
import { Classes, User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

type ClassType = Classes;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let Class: ClassType | ClassType[] | null

    async function getAllStudentsOfAllClasses(Classes: ClassType[]) {
        var students: any = []

        for (let Class of Classes) {
            const studentsOfThisClass = await prisma.user.findMany({ select: { id: true, email: true, first_name: true, last_name: true, classesId: true }, where: { classesId: Class.id } })
            students.push(studentsOfThisClass)
        }
        
        return students
    }

    
    if (!req.body) return res.status(400).json({
        success: false,
        message: 'Não foi possivel realizar esta consulta',
        error: 'Missing data'
    })

    if (!req.body.classId) return res.status(401).json({
        success: false,
        message: 'Não foi possivel realizar esta consulta',
        error: 'Missing data'
    })

    const { classId } = req.body

    classId !== -1 ? Class = await prisma.classes.findFirst({ where: { id: classId } }) : Class = await prisma.classes.findMany()

    if (Class === null) return res.status(404).json({
        success: false,
        message: 'Está turma não está registrada em nossa base de dados',
        error: 'Class not found'
    })

    const studentsAtThisClass = await prisma.user.findMany({
        select: {
            id: true,
            first_name: true,
            last_name: true,
            email: true
        },
        where: {
            classesId: classId
        }
    })

    return res.status(200).json({
        success: true,
        classData: Class,
        students: classId !== -1 ? studentsAtThisClass : await getAllStudentsOfAllClasses(Class as ClassType[])
    })
}
