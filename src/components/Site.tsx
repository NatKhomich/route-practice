import React from 'react';
import s from './Site.module.css'
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {PageOne} from './pages/PageOne';
import {PageTwo} from './pages/PageTwo';
import {PageThree} from './pages/PageThree';
import {Error404} from './pages/Error404';
import {Page} from './pages/Page';
import {dataState} from '../data/DataState';


export const Site = () => {
    return (
        <div>
            <div className={s.header}><h1>HEADER</h1></div>
            <div className={s.body}>
                <div className={s.nav}>
                    {/*<div> <NavLink className={ ( {isActive} )=> isActive? s.active : s.navLink } to={'/page1'}> Первая </NavLink> </div>
                    <div> <NavLink className={ ( {isActive} )=> isActive? s.active : s.navLink } to={'/page2'}> Вторая </NavLink> </div>
                    <div> <NavLink className={ ( {isActive} )=> isActive? s.active : s.navLink } to={'/page3'}> Третья </NavLink> </div>*/}

                    <div> <NavLink className={ ( {isActive} )=> isActive? s.active : s.navLink } to={'/page/0'}> Первая </NavLink> </div>
                    <div> <NavLink className={ ( {isActive} )=> isActive? s.active : s.navLink } to={'/page/1'}> Вторая </NavLink> </div>
                    <div> <NavLink className={ ( {isActive} )=> isActive? s.active : s.navLink } to={'/page/2'}> Третья </NavLink> </div>
                    <div> <a href={'page/0'}> Нативка </a> </div>
                </div>
                <div className={s.content}>
                    <Routes>

                        <Route path={'/'} element={<Navigate to={'/page0'}/>}/> //автоматическое вкл

                        <Route path={'/page/:id'} element={<Page pages={dataState.pages}/>}/>

                        {/*<Route path={'/page1'} element={<PageOne/>}/> //путь
                        <Route path={'/page2'} element={<PageTwo/>}/>
                        <Route path={'/page3'} element={<PageThree/>}/>*/}

                        <Route path={ '/*' } element={ <Error404/> } /> //ошибка
                    </Routes>
                </div>
            </div>
        </div>
    );
};

