import React, {ReactElement, ReactFragment, ReactNode} from "react";
import ReactDOM from 'react-dom';
import './dialog.scss';
import {scopedClassMaker} from "../helpers/classes";
import {Icon} from "../index";

interface Props {
    visible: boolean;
    buttons?: Array<React.ReactElement>;
    onClose: React.MouseEventHandler;
    closeOnClickMask?: boolean;
}


const scopedClass = scopedClassMaker('jui-dialog')
const sc = scopedClass


const Dialog: React.FunctionComponent<Props> = ({visible, children, buttons, onClose, closeOnClickMask}) => {

    const handleClickClose: React.MouseEventHandler = (e) => {
        onClose(e)
    };

    const dialog = (
        visible ?
            <React.Fragment>
                <div className={sc('mask')} onClick={e => !!closeOnClickMask && handleClickClose(e)}>
                </div>
                <div className={sc()}>
                    <div className={sc('close')} onClick={handleClickClose}>
                        <Icon name="close"/>
                    </div>
                    <header className={sc('header')}>header</header>
                    <main className={sc('main')}>
                        {children}
                    </main>
                    <footer className={sc('footer')}>
                        {buttons && buttons.map((item, index) => (
                            React.cloneElement(item, {key: index})
                        ))}
                    </footer>
                </div>
            </React.Fragment>
            : null
    )
    return (
        ReactDOM.createPortal(dialog, document.body)
    )

}

Dialog.defaultProps = {
    closeOnClickMask: false
}

const modal = (content: ReactNode | ReactFragment, buttons?: Array<ReactElement>, afterClose?: () => void) => {
    const div = document.createElement('div')
    const handleClose = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    const component = (
        <Dialog
            visible={true}
            onClose={() => {handleClose(); afterClose && afterClose()}}
            buttons={buttons}
        >
            {content}
        </Dialog>
    )
    document.body.append(div)
    ReactDOM.render(component, div)
    return handleClose
}

const alert = (content: string | number) => {
    const onClose = modal(<div>我是 alert</div>, [<button onClick={() => onClose()}>OK</button>])
}

const confirm = (content: string, yes?: () => void, no?: () => void) => {
    const onYes = () => {
        onClose()
        yes && yes()
    }
    const onNo = () => {
        onClose()
        no && no()
    }
    const buttons = [
        <button onClick={onYes}>yes</button>,
        <button onClick={onNo}>no</button>
    ]
    const onClose = modal(content, buttons, no)
}


export {alert, confirm, modal}

export default Dialog
