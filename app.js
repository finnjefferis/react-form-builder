import React from 'react';
import ReactDOM from 'react-dom';
import DemoBar from './demobar';
// eslint-disable-next-line no-unused-vars
import FormBuilder, { Registry } from './src/index';
import * as variables from './variables';

// Add our stylesheets for the demo.
require('./scss/application.scss');

const url = '/api/formdata';
const saveUrl = '/api/formdata';

const prevdata = [{"id":"9096FBCC-21BC-47BA-85B0-8274B445CCB8","element":"Dropdown","text":"Dropdown","required":false,"canHaveAnswer":true,"canHavePageBreakBefore":true,"canHaveAlternateForm":true,"canHaveDisplayHorizontal":true,"canHaveOptionCorrect":true,"canHaveOptionValue":true,"canPopulateFromApi":true,"field_name":"dropdown_8A3DA3F4-0D24-470E-BA8C-A2D68899DA24","label":"Placeholder label","options":[{"value":"place_holder_option_1","text":"Place holder option 1","key":"dropdown_option_D2B5B15C-23BC-4BBC-ACAF-07B75BE91087"},{"value":"place_holder_option_2","text":"Place holder option 2","key":"dropdown_option_5A228E2E-0084-458B-B0AD-F4E24F9BC268"},{"value":"place_holder_option_3","text":"Place holder option 3","key":"dropdown_option_9A03D19E-1617-4D5F-B687-A56117A07A90"}]},{"id":"6B0345AA-4884-48B2-9F86-20859459EDF3","element":"Checkboxes","text":"Checkboxes","required":false,"canHaveAnswer":true,"canHavePageBreakBefore":true,"canHaveAlternateForm":true,"canHaveDisplayHorizontal":true,"canHaveOptionCorrect":true,"canHaveOptionValue":true,"canPopulateFromApi":true,"field_name":"checkboxes_5D64148F-F085-44D1-B765-0765746BF076","label":"Placeholder label","options":[{"value":"place_holder_option_1","text":"Place holder option 1","key":"checkboxes_option_A5C052F2-EBC3-4749-BAF9-1C70299A601F"},{"value":"place_holder_option_2","text":"Place holder option 2","key":"checkboxes_option_6B334FA1-3E03-4F18-9DD9-9E5ADD35DE67"},{"value":"place_holder_option_3","text":"Place holder option 3","key":"checkboxes_option_61F80E8F-0C1A-4EFE-B8C5-74C846674251"}]},{"id":"8EE58427-75FC-4B37-99F2-8AF8011CE6F8","element":"Label","text":"Label","static":true,"required":false,"bold":false,"italic":false,"content":"Placeholder text...","canHavePageBreakBefore":true,"canHaveAlternateForm":true,"canHaveDisplayHorizontal":true,"canHaveOptionCorrect":true,"canHaveOptionValue":true,"canPopulateFromApi":true},{"id":"DF8B57BF-0AD2-42F6-9D02-732A3EC79941","element":"Signature","text":"Signature","required":false,"readOnly":false,"canHavePageBreakBefore":true,"canHaveAlternateForm":true,"canHaveDisplayHorizontal":true,"canHaveOptionCorrect":true,"canHaveOptionValue":true,"canPopulateFromApi":true,"field_name":"signature_BAF1DE2C-C654-4B5C-8CDF-2EB47629592E","label":"Signature"}]

// const TestComponent = () => <h2>Hello</h2>;

// const MyInput = React.forwardRef((props, ref) => {
//   const { name, defaultValue, disabled } = props;
//   return (
//     <>
//       <label style={{ marginRight: '1rem' }}><b>{ props.data.label }</b></label>
//       <input ref={ref} name={name} defaultValue={defaultValue} disabled={disabled} />;
//     </>
//   );
// });

// Registry.register('MyInput', MyInput);
// Registry.register('TestComponent', TestComponent);

// const items = [{
//     key: 'Header',
//   }, {
//     key: 'TextInput',
//   }, {
//     key: 'TextArea',
//   }, {
//     key: 'RadioButtons',
//   }, {
//     key: 'Checkboxes',
//   }, {
//     key: 'Image',
//   },
//   {
//     key: 'TwoColumnRow'
//   },
//   {
//     key: 'ThreeColumnRow'
//   },
//   {
//     key: 'FourColumnRow'
//   },
//   {
//     key: 'TestComponent',
//     element: 'CustomElement',
//     component: TestComponent,
//     type: 'custom',
//     field_name: 'test_component',
//     name: 'Something You Want',
//     icon: 'fa fa-cog',
//     static: true,
//     props: { test: 'test_comp' },
//     label: 'Label Test',
//   },
//   {
//     key: 'MyInput',
//     element: 'CustomElement',
//     component: MyInput,
//     type: 'custom',
//     forwardRef: true,
//     bare: true,
//     field_name: 'my_input_',
//     name: 'My Input',
//     icon: 'fa fa-cog',
//     props: { test: 'test_input' },
//     label: 'Label Input',
//   },
// ];

const App = () => (
  <FormBuilder.ReactFormBuilder
    data={prevdata}
    variables={variables}
    url={url}
    saveUrl={saveUrl}
    locale='en'
    

    // toolbarItems={items}
  />);

ReactDOM.render(
  <App />,
  document.getElementById('form-builder'),
);

ReactDOM.render(
  <DemoBar variables={variables} />,
  document.getElementById('demo-bar'),
);
