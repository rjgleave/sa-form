import Ajv from 'ajv';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';

// NOTE:  Uniforms tutorial omitted this line below, needed to compile
import {LongTextField, DateField} from 'uniforms-semantic';

const formValues = {
  activityTypes: [
    'Meeting / Office Hours [Management]', 
    'Service Deep Dive [Workshops]', 
    'AOD/SME/Specialist [Thought Leadership]', 
    'Architecture Review [Architecture]', 
    'Immersion Day [Workshops]'
  ],
  activityTopics: [
    'Analytics', 
    'Application Development', 
    'Athena', 
    'Cloudendure Migration', 
    'Immersion Day [Workshops]'
  ],
  activityDomains: [
    'Blockchain', 
    'Compute/HPC', 
    'Containers', 
    'AI/ML'
  ],
  activityComplexity: [
    '100: Introductory and overview engagement', 
    '200: Intermediate engagement; requires specific details about the topic', 
    '300: Advanced material; requires in-depth understanding of features in a real-world environment', 
    '400: Expert engagement; requires expert-to-expert interaction and coverage of specialized topics'
  ],
  activityInteractionType: [
    'Virtual Meeting', 
    'Onsite Meeting', 
    'Email'
  ],

};

const simpleRequestSchema = new SimpleSchema({
  accountLink: { label: 'Salesforce Account Link', type: String },
  accountName: { label: 'Account Name', type: String },
  accountOpportunity: { label: 'Salesforce Opportunity Link', type: String },
  activityTitle: { label: 'Activity Title', type: String },
  activityType: { label: 'Activity Type', type: String, allowedValues: formValues.activityTypes },
  activityTopic: { label: 'Topic', type: String, allowedValues: formValues.activityTopics },
  activityDomain: { label: 'Domain', type: String, allowedValues: formValues.activityDomains },
  activityComplexity: { label: 'Complexity', type: String, allowedValues: formValues.activityComplexity },
  activityDetails: { label: 'Activity Details', type: String, optional: true, defaultValue: '' },
  activityFromDate: { label: 'Date Range From:', type: Date, defaultValue: new Date() },
  activityToDate: { label: 'Date Range To:', type: Date, defaultValue: new Date() },
  activityLocation: { label: 'Activity Location', type: String },
  activityInteractionType: { label: 'Interaction Type', type: String, allowedValues: formValues.activityInteractionType },
});


const ajv = new Ajv({ allErrors: true, useDefaults: true });

function createValidator(schema) {
  const validator = ajv.compile(schema);

  return model => {
    validator(model);

    if (validator.errors && validator.errors.length) {
      throw { details: validator.errors };
    }
  };
}

const schemaValidator = createValidator(simpleRequestSchema);

const bridge = new SimpleSchema2Bridge(simpleRequestSchema, schemaValidator);

export default bridge;