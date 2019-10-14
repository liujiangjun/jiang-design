import React, {useState, Fragment} from 'react';
import { Dialog, alert, confirm, modal } from '../index';

const DialogExample: React.FunctionComponent = () => {
    const [x, setX] = useState(false)
    const [y, setY] = useState(false)
    const openModal = () => {
        const onClose = modal(<button onClick={() => onClose()}>点我关闭</button>)
    }
    return (
        <Fragment>
            <div>
                <h1>example1</h1>
                <button onClick={() => setX(!x)}>按钮</button>
                <Dialog
                    visible={x}
                    buttons={[<button onClick={() => setX(false)}>1</button>, <button>2</button>]}
                    onClose={() => setX(false)}
                >
                    <div>111</div>
                </Dialog>
            </div>
            <div>
                <h1>example2</h1>
                <button onClick={() => setY(!y)}>按钮</button>
                <Dialog
                    visible={y}
                    buttons={[<button onClick={() => setY(false)}>1</button>, <button>2</button>]}
                    onClose={() => setY(false)}
                    closeOnClickMask={true}
                >
                    <div>111</div>
                </Dialog>
            </div>
            <div>
                <h1>example3</h1>
                <button onClick={() => alert('alert')}>alert</button>
                <button onClick={() => confirm('confirm', () => {console.log('yes')}, () => {console.log('no')})}>confirm</button>
                <button onClick={openModal}>modal</button>
            </div>
        </Fragment>
    )
}

export default DialogExample
