import Head from 'next/head'
import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import axios from 'axios';
import Class from '@/Components/Class';
import Classes from '@/Components/Classes';

/*
    {
  "success": true,
  "classData": {
    "id": 7,
    "course": "Sistemas Informáticos",
    "year": 2
  },
  "students": [
    {
      "id": 1,
      "first_name": "Abyner",
      "last_name": "Rocha",
      "email": "a101051@epinfante.com"
    }
  ]
}
 */


export default function Home() {
    const showAll = true
   
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {showAll ? <Classes /> : <Class/>}
        </>
    )
}
