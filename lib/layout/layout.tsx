import React, {ReactElement} from 'react';
import {scopedClassMaker} from "../helpers/classes";
import './layout.scss';
import Aside from "./aside";

const sc = scopedClassMaker('jui-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = ({children, className, ...rest}) => {
    const x = children as Array<ReactElement>
    const hasAside = length in x && x.reduce((accumulate, current) => (
        accumulate || current.type === Aside
    ), false)
    return (
        <div className={sc({'': true, hasAside}, {extra: className})} {...rest}>
            {children}
        </div>
    )
}

export default Layout
