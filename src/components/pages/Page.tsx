import React from 'react';
import {PagesType} from '../../data/DataState';
import {useParams} from 'react-router-dom';

type PagePropsType = {
    pages: PagesType[]
}

export const Page = (props: PagePropsType) => {

    const params = useParams()
    console.log(Number(params.id) )


    return (
        <div>
            <div> {props.pages[Number(params.id)].heading} </div>
            <div> {props.pages[Number(params.id)].about} </div>
        </div>
    );
};
