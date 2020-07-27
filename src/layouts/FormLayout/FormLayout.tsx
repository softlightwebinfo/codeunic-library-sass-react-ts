import * as React from "react";
import {IFormLayoutProps, IFormLayoutState} from "./FormLayout.types";
import "./FormLayout.scss";
import {BEM} from "../../libs";
import {FormComponent} from "../..";
import FormLayoutContext from "../../context/FormLayoutContext";

export class FormLayout extends React.Component<IFormLayoutProps> {
    public state: IFormLayoutState = {
        values: {},
        addValue: (id, value) => {
            this.state.values[id] = value;
            this.setState({
                values: this.state.values,
            });
            this.props.onChange && this.props.onChange(id, value, this.state.values);
        }
    };

    onSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit && this.props.onSubmit(this.state.values);
    };

    render() {
        const bem = new BEM("Form-layout", {});
        bem.Append(this.props.className);
        return (
            <FormLayoutContext.Provider value={this.state}>
                <FormComponent onSubmit={this.onSubmit} card={this.props.form.card} id={this.props.form.getId()} className={bem.toString()} style={this.props.style}>
                    {this.props.form.getComponents().map(((value, index) => {
                        return value.render(index.toString());
                    }))}
                </FormComponent>
            </FormLayoutContext.Provider>
        );
    }

}
