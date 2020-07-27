export class FormComponentModel {
    constructor() {

    }

    setterProps(props: object) {
        Object.keys(props).forEach((value) => {
            this[value] = props[value];
        })
    }
}
