"use client";

import { NextStudio } from 'next-sanity/studio'
import config from '../../sanity.config';

const Admin = () => {
    return ( 
        <NextStudio config={config}></NextStudio>

    );
}

export default Admin;