import IconExample from './icon.example';
import React, {Fragment, FunctionComponent} from 'react';
import Demo from '../../demo';

const IconDemo: FunctionComponent = () => {
    return (
        <Fragment>
            <Demo code={require('!!raw-loader!./icon.example.tsx').default}>
                <IconExample/>
            </Demo>
        </Fragment>
    );
};

export default IconDemo;
