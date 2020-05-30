import Ajv from 'ajv';
import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';

// NOTE:  Uniforms tutorial omitted this line below, needed to compile
import {LongTextField} from 'uniforms-semantic';

const schema = {
  title: 'Request',
  type: 'object',
  properties: {
    accountLink: { type: 'string' },
    accountName: { type: 'string' },
    accountOpportunity: { type: 'string' },
    activityTitle: { type: 'string' },
    activityType: {
      type: 'string',
      options: [
        {
          label: 'Meeting / Office Hours [Management]',
          value: 'Support'
        },
        {
          label: 'Service Deep Dive [Workshops]',
          value: 'Service Discovery'
        },
        {
          label: 'AOD/SME/Specialist [Thought Leadership]',
          value: 'Thought Leadership'
        },
        {
          label: 'Architecture Review [Architecture]',
          value: 'Architecture'
        },
        {
          label: 'Immersion Day [Workshops]',
          value: 'Workshops'
        },
        {
          label: 'Migration Readiness Assessment [Architecture]',
          value: 'MRA'
        },
        {
          label: 'Account Planning [Management]',
          value: 'Management'
        }
      ]
    },
    activityTopic: {
      type: 'string',
      options: [
        {
          label: 'Analytics',
          value: 'Analytics'
        },
        {
          label: 'Application Development',
          value: 'Application Development'
        },
        {
          label: 'Athena',
          value: 'Athena'
        },
        {
          label: 'Cloudendure Migration',
          value: 'Cloudendure Migration'
        }
      ]
    },
    activityDomain: {
      type: 'string',
      options: [
        {
          label: 'Blockchain',
          value: 'Blockchain'
        },
        {
          label: 'Compute/HPC',
          value: 'Compute/HPC'
        },
        {
          label: 'Containers',
          value: 'Containers'
        }
      ]
    },
    activityComplexity: {
      type: 'string',
      options: [
        {
          label: '100: Introductory and overview engagement.',
          value: '100 Level'
        },
        {
          label: '200: Intermediate engagement; requires specific details about the topic.',
          value: '200 Level'
        },
        {
          label: '300: Advanced material; requires in-depth understanding of features in a real-world environment',
          value: '300 Level'
        },
        {
          label: '400: Expert engagement; requires expert-to-expert interaction and coverage of specialized topics',
          value: '400 Level'
        } 
      ]
    },
    activityFromDate: {
      format: 'date',
      type: 'string'
    },
    activityToDate: {
      format: 'date',
      type: 'string'
    },
    activityDetails: {
      type: 'string',
      uniforms: {
        component: LongTextField
      },
    },
    activityLocation: { type: 'string' },
    activityInteractionType: {
      type: 'string',
      options: [
        {
          label: 'Virtual meeting',
          value: 'Virtual meeting'
        },
        {
          label: 'On Site meeting',
          value: 'On Site meeting'
        },
        {
          label: 'email',
          value: 'email'
        }
      ]
    },
  },
  //required: ['accountName','activityType','activityLocation']
};


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

const schemaValidator = createValidator(schema);

const bridge = new JSONSchemaBridge(schema, schemaValidator);

export default bridge;