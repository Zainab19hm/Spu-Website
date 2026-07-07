import { dynamicForms, getFormSchema } from '../data/dynamic-forms.js';

export function registerDynamicFormStore(Alpine) {
    Alpine.store('dynamicForm', {
        activeFormId: null,
        formData: {},
        errors: {},
        submitted: false,
        submitting: false,

        // Multi-step state
        currentStep: 0,
        completedSteps: [],

        get schema() {
            if (!this.activeFormId) return null;
            return getFormSchema(this.activeFormId);
        },

        get isMultiStep() {
            return this.schema?.multiStep === true && Array.isArray(this.schema?.steps);
        },

        get totalSteps() {
            return this.isMultiStep ? this.schema.steps.length : 0;
        },

        get currentStepSchema() {
            if (!this.isMultiStep) return null;
            return this.schema.steps[this.currentStep] || null;
        },

        get currentStepFields() {
            return this.currentStepSchema?.fields || [];
        },

        open(formId, initialData) {
            this.activeFormId = formId;
            this.formData = {};
            this.errors = {};
            this.submitted = false;
            this.submitting = false;
            this.currentStep = 0;
            this.completedSteps = [];

            const form = this.schema;
            if (!form) return;

            if (this.isMultiStep) {
                form.steps.forEach(step => {
                    step.fields.forEach(field => {
                        this.formData[field.name] = this._defaultForField(field);
                    });
                });
            } else {
                form.fields.forEach(field => {
                    this.formData[field.name] = this._defaultForField(field);
                });
            }

            if (initialData) {
                Object.keys(initialData).forEach(key => {
                    if (this.formData.hasOwnProperty(key)) {
                        this.formData[key] = initialData[key];
                    }
                });
            }
        },

        _defaultForField(field) {
            if (field.type === 'checkbox') return false;
            if (field.type === 'select' && field.options?.length) {
                return field.options[0].value || '';
            }
            return '';
        },

        close() {
            this.activeFormId = null;
            this.formData = {};
            this.errors = {};
            this.submitted = false;
            this.submitting = false;
            this.currentStep = 0;
            this.completedSteps = [];
        },

        validateStep(stepIndex) {
            if (!this.isMultiStep) return this.validate();

            const step = this.schema.steps[stepIndex];
            if (!step) return true;

            this.errors = {};
            let valid = true;

            step.fields.forEach(field => {
                const value = this.formData[field.name];

                if (field.type === 'checkbox') {
                    if (field.required && !value) {
                        this.errors[field.name] = true;
                        valid = false;
                    }
                } else {
                    const strValue = (value || '').toString().trim();
                    if (field.required && !strValue) {
                        this.errors[field.name] = true;
                        valid = false;
                    }
                    if (strValue && field.type === 'email') {
                        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (!emailRe.test(strValue)) {
                            this.errors[field.name] = true;
                            valid = false;
                        }
                    }
                }
            });

            return valid;
        },

        validate() {
            this.errors = {};
            const form = this.schema;
            if (!form) return true;

            if (this.isMultiStep) {
                return this.validateStep(this.currentStep);
            }

            let valid = true;
            form.fields.forEach(field => {
                const value = this.formData[field.name];

                if (field.type === 'checkbox') {
                    if (field.required && !value) {
                        this.errors[field.name] = true;
                        valid = false;
                    }
                } else {
                    const strValue = (value || '').toString().trim();
                    if (field.required && !strValue) {
                        this.errors[field.name] = true;
                        valid = false;
                    }
                    if (strValue && field.type === 'email') {
                        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (!emailRe.test(strValue)) {
                            this.errors[field.name] = true;
                            valid = false;
                        }
                    }
                }
            });

            return valid;
        },

        nextStep() {
            if (!this.validateStep(this.currentStep)) return;

            if (!this.completedSteps.includes(this.currentStep)) {
                this.completedSteps.push(this.currentStep);
            }

            if (this.currentStep < this.totalSteps - 1) {
                this.currentStep++;
            }
        },

        prevStep() {
            if (this.currentStep > 0) {
                this.currentStep--;
            }
        },

        goToStep(stepIndex) {
            if (stepIndex < 0 || stepIndex >= this.totalSteps) return;

            // Only allow going to completed steps or the next available step
            if (stepIndex <= this.currentStep || this.completedSteps.includes(stepIndex - 1)) {
                this.currentStep = stepIndex;
            }
        },

        handleSubmit(event) {
            event.preventDefault();

            if (this.isMultiStep) {
                if (!this.validateStep(this.currentStep)) return;

                if (!this.completedSteps.includes(this.currentStep)) {
                    this.completedSteps.push(this.currentStep);
                }

                // If not on last step, go to next
                if (this.currentStep < this.totalSteps - 1) {
                    this.currentStep++;
                    return;
                }
            } else {
                if (!this.validate()) return;
            }

            this.submitting = true;

            setTimeout(() => {
                this.submitting = false;
                this.submitted = true;
            }, 1500);
        }
    });
}
