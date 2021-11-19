/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

const AWS = require('aws-sdk');
var cloudwatch = new AWS.CloudWatch({ apiVersion: '2010-08-01' });

// process.env.BOT_CHANNEL_ID
exports.lambdaHandler = async (event, context, callback) => {
	const params = {
		AlarmNames: [process.env.ALARM_NAMES_ARRAY],
	};

	cloudwatch.disableAlarmActions(params, function (err, data) {
		if (err)
			console.log('There was an error with the function ' + err, err.stack);
		else console.log('The function successfully ran ' + data);
	});

	callback(null, 'The Lambda finished processing');
};
