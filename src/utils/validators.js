export const validators = ({required, minLength, maxLength}) => {
    let validatorObject = {};

    if (required !== undefined && required) {
        validatorObject = {
            ...validatorObject,
            required: 'This field is required!'
        }
    }

    if (minLength !== undefined && typeof minLength === 'number') {
        validatorObject = {
            ...validatorObject,
            minLength: {
                value: minLength,
                message: `Max length is ${minLength} symbols!`
            }
        }
    }

    if (maxLength !== undefined && typeof maxLength === 'number') {
        validatorObject = {
            ...validatorObject,
            maxLength: {
                value: maxLength,
                message: `Max length is ${maxLength} symbols!`
            }
        }
    }

    return validatorObject;
}