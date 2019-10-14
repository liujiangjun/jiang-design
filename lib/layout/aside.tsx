import React from 'react';
import {scopedClassMaker} from "../helpers/classes";

const sc = scopedClassMaker('jui-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Aside: React.FunctionComponent<Props> = ({className, children, ...rest}) => {
    return (
        <div className={sc('aside', {extra: className})} {...rest}>
            {children}
        </div>
    )
}

export default Aside
