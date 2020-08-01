import {FormInput, FormInputInterface} from "./FormInput";
import {FormLabelInterface} from "./FormLabelInterface";
import {FormLabel} from "./FormLabel";
import {FormButton, FormButtonInterface} from "./FormButton";
import {FormSelect, IFormSelectInterface} from "./FormSelect";
import {FormCheckbox, FormCheckboxInterface} from "./FormCheckbox";

export class FormComponent {
    constructor() {

    }

    Input(props: FormInputInterface): FormInput {
        return new FormInput(props);
    }

    FormLabel(props: FormLabelInterface) {
        return new FormLabel(props);
    }

    Button(props: FormButtonInterface) {
        return new FormButton(props);
    }

    Select(props: IFormSelectInterface) {
        return new FormSelect(props);
    }

    Checkbox(props: FormCheckboxInterface, label?: string) {
        return new FormCheckbox(props, label);
    }
}
