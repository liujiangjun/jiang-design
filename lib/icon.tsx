import React from 'react';
import '../icons/wechat.svg';
import './icon.scss';

interface IconProps {
    name: string;
    onClick: React.MouseEventHandler<SVGElement>
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <svg className="jui-icon">
            <use xlinkHref={`#${props.name}`} onClick={props.onClick}/>
            </svg>
    )

}

export default Icon
