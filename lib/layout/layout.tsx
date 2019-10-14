import React, {ReactElement} from 'react';
import {scopedClassMaker} from "../helpers/classes";
import './layout.scss';
import Aside from "./aside";
import Header from './header';
import Content from './content';
import Footer from './footer';

const sc = scopedClassMaker('jui-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = ({children, className, ...rest}) => {
    const innerChildren = children as Array<ReactElement>
    const hasAside = 'length' in innerChildren && innerChildren.reduce((accumulate, current) => (
        accumulate || current.type === Aside
    ), false)
    console.log('hasAside', hasAside)
    return (
        <div className={sc({'': true, hasAside}, {extra: className})} {...rest}>
            {children}
        </div>
    )
}

export default Layout

export { Header, Content, Footer, Aside }

