import { useState } from 'react';
import './App.scss'
import {Resume} from './resume/resume-a4'
import classNames from 'classnames';

function App() {
  const [isPrintMode, setIsPrintMode] = useState(false);
  const toggPrintMode = () => setIsPrintMode(!isPrintMode);
  const doPrint = () => window.print();
  return (
    <div className={classNames("app", {isPrintMode})}>
      <div className={"app-controls do-not-print"}>
        {isPrintMode && <button onClick={doPrint}>Print</button>}
        <button onClick={toggPrintMode}>{isPrintMode ? "Exit Print Preview":"Show Print Preview"}</button>
        {/* <button className="print-meta" onClick={toggPrintView}>Print Document</button> */}
      </div>
      <div className='app-content'>
        {isPrintMode &&
        <>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
          hello
          </>
        }
        <Resume isPrintMode />
      </div>
    </div>
  )
}

export default App
