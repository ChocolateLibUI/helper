
/**Moves the caret position to the end of the given elements text*/
export let setCaretToEnd = (node: Node) => {
    let range = document.createRange();
    if ('setSelectionRange' in node) {
        let len = (<HTMLInputElement>node).value.length;
        (<HTMLInputElement>node).setSelectionRange(len, len);
        (<HTMLInputElement>node).focus();
    } else {
        let lastChild = <Node>node.lastChild
        if (lastChild) {
            range.setStartAfter(lastChild);
        } else {
            range.setStart(node, node.textContent?.length || 0);
        }
        let selection = node.ownerDocument?.defaultView?.getSelection();
        if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
}

/**Moves the caret position to the beginning of the given elements text*/
export let setCaretToStart = (node: Node) => {
    let range = document.createRange();
    if ('setSelectionRange' in node) {
        (<HTMLInputElement>node).setSelectionRange(0, 0);
        (<HTMLInputElement>node).focus();
    } else {
        let firstChild = <Node>node.firstChild
        if (firstChild) {
            range.setStartBefore(firstChild);
        } else {
            range.setStart(node, 0);
        }
        let selection = node.ownerDocument?.defaultView?.getSelection();
        if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
}

/**Moves the caret position to the the specified position of the given elements text*/
export let setCaretToPosition = (node: Node, start: number, end: number) => {
    let range = document.createRange();
    if ('setSelectionRange' in node) {
        (<HTMLInputElement>node).setSelectionRange(start, end);
        (<HTMLInputElement>node).focus();
    } else {
        range.setStart(node, start);
        range.setEnd(node, end);
        let selection = node.ownerDocument?.defaultView?.getSelection();
        if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
}