import { useState } from 'react';
import './App.scss'
import {Resume} from './resume/resume-a4'
import classNames from 'classnames';

function App() {
  const [isPrintMode, setIsPrintMode] = useState(false);
  const toggPrintMode = () => setIsPrintMode(!isPrintMode);
  const doPrint = () => window.print();
  const classes = classNames("site", {isPrintMode});
  return (
    <div className={classes}>
      <div className="site-controls do-not-print">
        {isPrintMode && <button onClick={doPrint}>Print</button>}
        <button onClick={toggPrintMode}>{isPrintMode ? "Exit Print Mode":"Print Mode"}</button>
        {/* <button className="print-meta" onClick={toggPrintView}>Print Document</button> */}
      </div>
      <div className='site-content'>
        <Resume isPrintMode />
      </div>
    </div>
  )
}

export default App
