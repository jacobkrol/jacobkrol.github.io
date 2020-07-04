import React from 'react';
import Backdrop from '../utilities/Backdrop';
import TitleCard from '../utilities/TitleCard';
import MapImg from '../../graphics/map-lost.jpg';

function Error404Page() {
    return (
        <>
            <Backdrop imgName={MapImg} />
            <TitleCard title="404 Error" subtitle="Sorry we couldn't find this page" />
        </>
    )
}

export default Error404Page;
