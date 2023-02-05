import "./index.css"
import * as all from "../src"


let pageSetup = (body: HTMLElement) => {
    let caretTest = body.appendChild(document.createElement('div'));
    let caretContentEditable = caretTest.appendChild(document.createElement('div'));
    caretContentEditable.contentEditable = 'true';
    let caretTextArea = caretTest.appendChild(document.createElement('textarea'));
    let caretInput = caretTest.appendChild(document.createElement('input'));
    caretContentEditable.textContent = caretTextArea.value = caretInput.value = 'Lorem ipsum dolor sit amet.'

    let caretControlEnd = body.appendChild(document.createElement('div'));
    let caretSetToEndcaretContentEditable = caretControlEnd.appendChild(document.createElement('button'));
    caretSetToEndcaretContentEditable.textContent = 'Set Caret To End';
    caretSetToEndcaretContentEditable.onclick = () => { all.setCaretToEnd(caretContentEditable); }
    let caretSetToEndcaretTextArea = caretControlEnd.appendChild(document.createElement('button'));
    caretSetToEndcaretTextArea.textContent = 'Set Caret To End';
    caretSetToEndcaretTextArea.onclick = () => { all.setCaretToEnd(caretTextArea); }
    let caretSetToEndcaretInput = caretControlEnd.appendChild(document.createElement('button'));
    caretSetToEndcaretInput.textContent = 'Set Caret To End';
    caretSetToEndcaretInput.onclick = () => { all.setCaretToEnd(caretInput); }


    let caretControlStart = body.appendChild(document.createElement('div'));
    let caretSetToStartcaretContentEditable = caretControlStart.appendChild(document.createElement('button'));
    caretSetToStartcaretContentEditable.textContent = 'Set Caret To Start';
    caretSetToStartcaretContentEditable.onclick = () => { all.setCaretToStart(caretContentEditable); }
    let caretSetToStartcaretcaretTextArea = caretControlStart.appendChild(document.createElement('button'));
    caretSetToStartcaretcaretTextArea.textContent = 'Set Caret To Start';
    caretSetToStartcaretcaretTextArea.onclick = () => { all.setCaretToStart(caretTextArea); }
    let caretSetToStartcaretcaretInput = caretControlStart.appendChild(document.createElement('button'));
    caretSetToStartcaretcaretInput.textContent = 'Set Caret To Start';
    caretSetToStartcaretcaretInput.onclick = () => { all.setCaretToStart(caretInput); }


    let caretControlPos = body.appendChild(document.createElement('div'));
    let caretSetToPoscaretContentEditable = caretControlPos.appendChild(document.createElement('button'));
    caretSetToPoscaretContentEditable.textContent = 'Set Caret To Pos';
    caretSetToPoscaretContentEditable.onclick = () => { all.setCaretToPosition(caretContentEditable, 10, 18); }
    let caretSetToPoscaretcaretTextArea = caretControlPos.appendChild(document.createElement('button'));
    caretSetToPoscaretcaretTextArea.textContent = 'Set Caret To Pos';
    caretSetToPoscaretcaretTextArea.onclick = () => { all.setCaretToPosition(caretTextArea, 10, 18); }
    let caretSetToPoscaretcaretInput = caretControlPos.appendChild(document.createElement('button'));
    caretSetToPoscaretcaretInput.textContent = 'Set Caret To Pos';
    caretSetToPoscaretcaretInput.onclick = () => { all.setCaretToPosition(caretInput, 10, 18); }

}

pageSetup(document.body);