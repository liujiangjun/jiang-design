import React, {useState} from 'react';
import Dialog from './dialog';

const DialogExample: React.FunctionComponent = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div>
            <button onClick={() => setVisible(!visible)}>按钮</button>
            <Dialog
                visible={visible}
                buttons={[<button>1</button>, <button>2</button>]}
            >
                <div>111</div>
            </Dialog>
        </div>
    )
}

export default DialogExample
