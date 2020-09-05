import AddInputComponent from './components/AddInputComponent';
import DeleteInputComponent from './components/DeleteInputComponent';
import SendInputComponent from './components/SendInputComponent';
import DefaultInputComponent from './components/DefaultInputComponent';

export default class InputComponentsFactory {
    // TODO nazewnictwo page, route, view
    static createAddPage() {
        return new AddInputComponent();
    }

    static createSendPage() {
        return new SendInputComponent();
    }

    static createDeletePage() {
        return new DeleteInputComponent();
    }

    static createDefaultPage() {
        return new DefaultInputComponent();
    }
}
