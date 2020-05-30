
import React from 'react';
import {
  AutoField,
  AutoForm,
  ErrorField,
  DateField,
  RadioField,
  SubmitField
} from 'uniforms-semantic';

import RequestSchema from './SaRequestSchema';

const style = {
  margin: 200,
};

// Get the query parameters and default them into the form
let search = window.location.search;
let params = new URLSearchParams(search);
// Salesforce account 
let account = params.get('account');
let name = params.get('name');
console.log(name);

export default function RequestForm() {
  return (
    <AutoForm style={style} schema={RequestSchema} onSubmit={console.log}>
      <h2>SA Activity/Support Request</h2>
      <AutoField name="accountID" value={account}/>
      <ErrorField
        name="accountID"
        errorMessage="Account ID is required"
      />
      <AutoField name="accountName" value={name}/>
      <ErrorField
        name="accountName"
        errorMessage="Account name is required"
      />
      <h3>Activity Details</h3>
      <span></span>
      <DateField name="activityDate" />
      <AutoField name="activityType" />
      <AutoField name="activityInfo" />
      <RadioField name="activityLocation" />
      <SubmitField />
    </AutoForm>
  );
}