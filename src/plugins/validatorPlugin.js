import { configure, defineRule, ErrorMessage, Form, Field } from 'vee-validate'
import { localize } from '@vee-validate/i18n';
import { required, email, min } from '@vee-validate/rules'

const plugin = {
    install: (app) => {

        defineRule('required', required);
        defineRule('email', email);
        defineRule('min', min);

        configure({
            generateMessage: localize('en', {
                messages: {
                    required: 'This field is required',
                    email: 'this Email field is not valid, enter @'
                },
            }),
        });

        app.component("Veeform", Form)
        app.component("VeeField", Field)
        app.component("ErrorMessage", ErrorMessage)
    }
}

export default plugin