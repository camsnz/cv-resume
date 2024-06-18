import { useState } from 'react';
import './App.scss'
import {Resume} from './resume/resume-a4'
import classNames from 'classnames';

function App() {
  const [isExpMode, setIsExpMode] = useState(false);
  const [isPrintMode, setIsPrintMode] = useState(true);
  const toggExpMode = () => setIsExpMode(!isExpMode);
  const toggPrintMode = () => setIsPrintMode(!isPrintMode);
  const doPrint = () => window.print();
  return (
    <div className={classNames("app", {isPrintMode})}>
      {!isExpMode && <div className="app-controls"><button onClick={toggExpMode}>Enable Experiments</button></div>}
      {isExpMode && <div>
          <div className={"app-controls do-not-print"}>
            <div className="btns">
              {isPrintMode && <button onClick={doPrint}>Print</button>}
              <button onClick={toggPrintMode}>{isPrintMode ? "Exit Print Preview":"Show Print Preview"}</button>
            </div>
            <div className="experimental-msg">
              Note: These are incomplete features, layout, etc.
              <button onClick={toggExpMode}>Disable</button>
            </div>
          </div>
        </div>
      }
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
