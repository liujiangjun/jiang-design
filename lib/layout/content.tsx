import React from 'react';
import {scopedClassMaker} from "../helpers/classes";

const sc = scopedClassMaker('jui-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Content: React.FunctionComponent<Props> = ({className, children, ...rest}) => {
    return (
        <div className={sc('content', {extra: className})} {...rest}>
            {children}
        </div>
    )
}

export default Content
