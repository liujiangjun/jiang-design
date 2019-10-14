import React from 'react';
import {scopedClassMaker} from "../helpers/classes";

const sc = scopedClassMaker('jui-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Footer: React.FunctionComponent<Props> = ({className, children, ...rest}) => {
    return (
        <div className={sc('footer', {extra: className})} {...rest}>
            {children}
        </div>
    )
}

export default Footer
