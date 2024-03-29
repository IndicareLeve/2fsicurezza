import {
    HCAPTCHA_SECRETKEY,
    MAILERSEND_APIKEY,
    MAILERSEND_FROM,
    MAILERSEND_TO,
    MAILERSEND_TEMPLATEID,
} from '$env/static/private';
import { PUBLIC_HCAPTCHA_SITEKEY } from '$env/static/public';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    try {
        const { name, replyTo, message, response: hCaptchaClientResponse } = await request.json();

        const secret = HCAPTCHA_SECRETKEY;
        const sitekey = PUBLIC_HCAPTCHA_SITEKEY;
        const body = new URLSearchParams({ response: hCaptchaClientResponse, secret, sitekey });

        const response = await fetch('https://hcaptcha.com/siteverify', {
            method: 'POST',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: body.toString(),
        });

        const data = await response.json();
        const { success } = data;
        console.log('data: ', data);
        if (success) {
            console.log('hCaptcha says yes!');
        } else {
            console.log('hCaptcha says no!');
            return {
                status: 403,
                error: 'hCaptcha not validated'
            }
        }

        // process name, email and message here e.g. email site admin with message details
        //console.log({ name, email, message });

        const mailersendRequest = {
            'from': {
                'email': MAILERSEND_FROM
            },
            'to': [
                {
                    'email': MAILERSEND_TO
                }
            ],
            'subject': `Nuova richiesta da ${name}`,
            'personalization': [{
                'email': MAILERSEND_TO,
                'data': {
                    'name': name,
                    'message': message,
                    'replyTo': replyTo
                }
            }],
            'template_id': MAILERSEND_TEMPLATEID
        };

        const mailersend = await fetch('https://api.mailersend.com/v1/email', {
            method: 'POST',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${MAILERSEND_APIKEY}`
            },
            body: JSON.stringify(mailersendRequest),
        });
        if (mailersend.status >= 400) {
            return {
                status: mailersend.status,
                error: 'error occurred sending email'
            }
        } else {
            return new Response('OK');
        }

    } catch (err) {
        const error = `Error in /verify.json.js: ${err}`;
        console.error(error);
        return {
            status: 500,
            error,
        };
    }
}