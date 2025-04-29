import { DragAndDropWrapper } from "./DragAndDropWrapper/DragAndDropWrapper";
import { withMaxItems } from "./withMaxItems/withMaxItems";
import { withReactToItemsChange } from "./withReactToItemsChange/withReactToItemsChange";


function uuid(): string {

    const array: Uint8Array = new Uint8Array(6);
    const length = 6;
    const bytes = new Uint8Array(length);

    // Generate random values
    for (let i = 0; i < length; i++) {
        bytes[i] = Math.floor(Math.random() * 256);
    }

    // Copy to the original array
    for (let i = 0; i < length; i++) {
        array[i] = bytes[i];
    }

    return array.join('');
}
const ComponentWithMaxItems = withMaxItems(DragAndDropWrapper, uuid);
const ComponentWithReactToItemsChange = withReactToItemsChange(ComponentWithMaxItems);

export const ListManager = ComponentWithReactToItemsChange;
