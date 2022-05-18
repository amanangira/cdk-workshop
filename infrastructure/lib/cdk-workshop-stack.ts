import {Stack, App, StackProps,} from 'aws-cdk-lib';
import {Function, Runtime, Code,} from 'aws-cdk-lib/aws-lambda';

export class CdkWorkshopStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    const helloLambda = new Function(this, 'HelloHandler', {
      runtime: Runtime.GO_1_X,
      code: Code.fromAsset('./../lambda'),
      handler: 'main'
    });
  }
}
