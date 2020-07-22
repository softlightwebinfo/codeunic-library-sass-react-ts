import React from "react";
import {InvoiceLayout} from './InvoiceLayout';
import {randIncluded} from "../../utils";
// @ts-ignore
export default {
    title: "Layouts|Invoice"
};

export const Default = () => (
    <div style={{padding: 40}}>
        <InvoiceLayout
            invoice={{
                address: "3864 Quiet Valley Lane",
                business: "Dreamguy's Technologies",
                postalCode: "91403",
                logo: "https://es.freelogodesign.org/Content/img/logo-samples/flooop.png",
                invoiceNum: "INV-0001",
                details: [
                    "Date: March 12, 2019",
                    "Due date: April 25, 2019",
                ],
                invoiceTo: [
                    "Barry Cuda",
                    "Global Technologies",
                    "5754 Airport Rd",
                    "Coosada, AL, 36020",
                    "United States",
                    "888-777-6655",
                    "barrycuda@example.com"
                ],
                paymentDetails: [
                    {title: "Total Due:", value: "8,750€"},
                    {title: "Bank name:", value: "Profit Bank Europe"},
                    {title: "Country:", value: "United Kingdom"},
                    {title: "City:", value: "London E1 8BF"},
                    {title: "Address:", value: "3 Goodman Street"},
                    {title: "IBAN:", value: "KFH37784028476740"},
                    {title: "SWIFT code:", value: "BPT4E"},
                ],
                rows: [...new Array(randIncluded(1, 10))].map((_, index) => ({
                    key: index + 1,
                    item: "Android Application",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    unit: randIncluded(1, 5000),
                    quantity: randIncluded(1, 10),
                })),
                otherInformation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed dictum ligula, cursus blandit risus. Maecenas eget metus non tellus dignissim aliquam ut a ex. Maecenas sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae lorem interdum, eu scelerisque tellus fermentum. Curabitur sit amet lacinia lorem. Nullam finibus pellentesque libero, eu finibus sapien interdum vel"
            }}
            onClickButton={(e, index) => console.log(e, index)}
        />
    </div>
);
