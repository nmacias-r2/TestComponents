'use client';
import React from 'react';
import Image from 'next/image';

import { EquipoCardWrapper } from './EquipoCard.styles';

interface props {
    nameText: string;
    clave: string;
    ubicacion: string;
    url: string | null | undefined;
}

export default function EquipoCard({ nameText, url, clave, ubicacion }: props) {
    const URL = url && url != null ? url : '/img/pexels-pixabay-269077.jpg';

    return (
        <EquipoCardWrapper>
            <div className="img-container">
                <Image src={URL} fill={true} alt="Picture of the author" />
                <div className="clave">{clave}</div>
                <div className="text">
                    <div className="name">{nameText}</div>
                    <div className="location">{ubicacion}</div>
                </div>
            </div>
        </EquipoCardWrapper>
    );
}
