import * as React from 'react';

interface Props {
    visible: boolean
}

const Dialog: React.FunctionComponent<Props> = ({visible}) => {
    return (
        visible ?
            <div>dialog</div> : null
    )
}

export default Dialog
