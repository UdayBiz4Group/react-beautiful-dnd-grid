import { DragAndDropWrapper } from "./DragAndDropWrapper/DragAndDropWrapper";
import { withMaxItems } from "./withMaxItems/withMaxItems";
import { withReactToItemsChange } from "./withReactToItemsChange/withReactToItemsChange";
import { v4 as uuid } from "uuid";

const ComponentWithMaxItems = withMaxItems(DragAndDropWrapper, uuid);
const ComponentWithReactToItemsChange = withReactToItemsChange(ComponentWithMaxItems);

export const ListManager = ComponentWithReactToItemsChange;
