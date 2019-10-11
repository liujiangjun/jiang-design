import * as React from 'react';
import './dialog.scss';
import {scopedClassMaker} from "../helpers/classes";
import {Icon} from "../index";

interface Props {
    visible: boolean;
    buttons: Array<React.ReactElement>;
}


const scopedClass = scopedClassMaker('jui-dialog')
const sc = scopedClass


const Dialog: React.FunctionComponent<Props> = ({visible, children, buttons}) => {
    return (
        visible ?
            <React.Fragment>
                <div className={sc('mask')}>
                </div>
                <div className={sc()}>
                    <div className={sc('close')}>
                        <Icon name="close"/>
                    </div>
                    <header className={sc('header')}>11</header>
                    <main className={sc('main')}>
                        {children}
                    </main>
                    <footer className={sc('footer')}>
                        {buttons}
                    </footer>
                </div>
            </React.Fragment>
            : null
    )
}

export default Dialog
