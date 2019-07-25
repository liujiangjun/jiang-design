import React from 'react';
import '../icons/wechat.svg';
import './icon.scss';

interface IconProps {
    name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <svg className="jui-icon">
            <use xlinkHref={`#${props.name}`}/>
            </svg>
    )

}

export default Icon
