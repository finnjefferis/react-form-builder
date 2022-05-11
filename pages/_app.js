import React from "react";
import Head from "next/head";
import DemoBar from "./demobar";
// eslint-disable-next-line no-unused-vars
import FormBuilder, { Registry } from "./src/index";
import * as variables from "./variables";
import "react-form-builder2/dist/app.css";


const url = "/api/result";
const saveUrl = "/api/result";

function App() {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
      </Head>
      <DemoBar />
      <FormBuilder.ReactFormBuilder
        variables={variables}
        url={url}
        saveUrl={saveUrl}
        locale="en"
        // toolbarItems={items}
      />
    </div>
  );
}

export default App;
