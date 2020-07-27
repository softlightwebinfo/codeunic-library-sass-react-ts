import {FormGroup, FormGroupInterface} from "./FormGroup";
import {FormComponent} from "./FormComponent";
import {IFormComponent} from "./IFormComponent";
import {IFormComponentProps} from "../../components/FormComponent/FormComponent.types";
import {FormComponentModel} from "./FormComponentModel";

export class Form extends FormComponentModel implements IFormComponentProps {
    id: string;
    card: boolean;
    private components: IFormComponent[] = [];

    constructor(id: string, props: IFormComponentProps = {}) {
        super();
        this.id = id;
        this.setterProps(props);
    }

    public Add(component: IFormComponent) {
        this.components.push(component);
        return this;
    }

    Group(props?: FormGroupInterface): FormGroup {
        return new FormGroup(props);
    }

    Component() {
        return new FormComponent();
    }

    getId(): string {
        return this.id
    }

    getComponents() {
        return this.components;
    }
}
