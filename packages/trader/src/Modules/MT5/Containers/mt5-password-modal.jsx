import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';
import { FormSubmitButton, Icon, Modal, PasswordInput, PasswordMeter } from '@deriv/components';
import { localize, Localize } from '@deriv/translations';
import SuccessDialog from 'App/Containers/Modals/success-dialog.jsx';
import routes from 'Constants/routes';
import 'Sass/app/modules/mt5/mt5.scss';
import { connect } from 'Stores/connect';
import { validLength, validPassword } from 'Utils/Validator/declarative-validation-rules';
import FinancialStpDescription from './financial-stp-description.jsx';

const getSubmitText = (account_title, category) => {
    if (category === 'real') {
        return localize(
            'You have created a DMT5 {{account_title}} account. To start trading, transfer funds from your Deriv account into this account.',
            { account_title: account_title[0].toLowerCase() + account_title.substr(1) }
        );
    }

    return localize('You have created a Deriv {{account_title}}.', { account_title });
};

const getIconFromType = type => {
    switch (type) {
        case 'synthetic':
            return <Icon icon='IcMt5Synthetic' size={64} />;
        case 'financial':
            return <Icon icon='IcMt5Financial' size={64} />;
        default:
            return <Icon icon='IcMt5FinancialStp' size={64} />;
    }
};

const MT5PasswordModal = ({
    account_title,
    account_type,
    disableMt5PasswordModal,
    // error_message,
    form_error,
    history,
    has_mt5_error,
    is_mt5_password_modal_enabled,
    is_mt5_success_dialog_enabled,
    setMt5SuccessDialog,
    setMt5Error,
    submitMt5Password,
}) => {
    const validatePassword = values => {
        const is_valid =
            validPassword(values.password) &&
            validLength(values.password, {
                min: 8,
                max: 25,
            });
        const errors = {};

        if (!is_valid) {
            errors.password = localize('You need to include uppercase and lowercase letters, and numbers.');
        }

        return errors;
    };

    const closeDialogs = () => {
        setMt5SuccessDialog(false);
        setMt5Error(false);
    };

    const closeModal = () => {
        closeDialogs();
        disableMt5PasswordModal();
    };

    const closeOpenSuccess = () => {
        disableMt5PasswordModal();
        closeDialogs();
        if (account_type.category === 'real') {
            history.push(routes.cashier_acc_transfer);
        }
    };

    const IconType = () => getIconFromType(account_type.type);
    const should_show_password = is_mt5_password_modal_enabled && !has_mt5_error && !is_mt5_success_dialog_enabled;
    const should_show_success = !has_mt5_error && is_mt5_success_dialog_enabled;
    const is_real_financial_stp = [account_type.category, account_type.type].join('_') === 'real_financial_stp';

    return (
        <React.Fragment>
            <Modal
                className='mt5-password-modal'
                is_open={should_show_password}
                toggleModal={closeModal}
                width={is_real_financial_stp ? '360px' : 'auto'}
                has_close_icon
            >
                <Formik
                    initialValues={{
                        password: '',
                    }}
                    validate={validatePassword}
                    onSubmit={(values, actions) => {
                        submitMt5Password(values.password, actions.setSubmitting);
                    }}
                    render={({
                        handleSubmit,
                        // setFieldValue,
                        setFieldTouched,
                        handleChange,
                        handleBlur,
                        errors,
                        values,
                        isSubmitting,
                        touched,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <h2>
                                <Localize
                                    i18n_default_text='Choose a password for your DMT5 {{ account_type }} account'
                                    values={{
                                        account_type: account_title,
                                    }}
                                />
                            </h2>
                            <div className='dc-modal__container_mt5-password-modal__body'>
                                <div className='input-element'>
                                    <PasswordMeter input={values.password} error={touched.password && errors.password}>
                                        <PasswordInput
                                            autoComplete='password'
                                            label={localize('MT5 Password')}
                                            name='password'
                                            value={values.password}
                                            onBlur={handleBlur}
                                            onChange={e => {
                                                setFieldTouched('password', true);
                                                handleChange(e);
                                            }}
                                        />
                                    </PasswordMeter>
                                </div>
                                <div className='dc-modal__container_mt5-password-modal__description'>
                                    <p>
                                        <Localize i18n_default_text='Strong passwords contain at least 8 characters, combine uppercase and lowercase letters with numbers' />
                                    </p>
                                    <FinancialStpDescription is_real_financial_stp={is_real_financial_stp} />
                                </div>
                            </div>
                            <FormSubmitButton
                                is_center={is_real_financial_stp}
                                is_disabled={isSubmitting || !values.password || Object.keys(errors).length > 0}
                                has_cancel={!is_real_financial_stp}
                                cancel_label={localize('Cancel')}
                                onCancel={closeModal}
                                is_loading={isSubmitting}
                                label={localize('Add account')}
                                form_error={form_error}
                            />
                        </form>
                    )}
                />
            </Modal>
            <SuccessDialog
                is_open={should_show_success}
                toggleModal={closeModal}
                onCancel={closeModal}
                onSubmit={closeOpenSuccess}
                message={getSubmitText(account_title, account_type.category)}
                // message={error_message}
                icon={<IconType />}
                icon_size='xlarge'
                text_submit={account_type.category === 'real' ? localize('Transfer now') : localize('OK')}
                has_cancel={account_type.category === 'real'}
            />
        </React.Fragment>
    );
};

MT5PasswordModal.propTypes = {
    account_title: PropTypes.string,
    account_type: PropTypes.object,
    disableMt5PasswordModal: PropTypes.func,
    error_message: PropTypes.string,
    has_mt5_error: PropTypes.bool,
    is_mt5_password_modal_enabled: PropTypes.bool,
    is_mt5_success_dialog_enabled: PropTypes.bool,
    setMt5Error: PropTypes.func,
    setMt5SuccessDialog: PropTypes.func,
    submitMt5Password: PropTypes.func,
};

export default connect(({ modules }) => ({
    account_title: modules.mt5.account_title,
    account_type: modules.mt5.account_type,
    disableMt5PasswordModal: modules.mt5.disableMt5PasswordModal,
    error_message: modules.mt5.error_message,
    has_mt5_error: modules.mt5.has_mt5_error,
    is_mt5_success_dialog_enabled: modules.mt5.is_mt5_success_dialog_enabled,
    is_mt5_password_modal_enabled: modules.mt5.is_mt5_password_modal_enabled,
    setMt5Error: modules.mt5.setError,
    setMt5SuccessDialog: modules.mt5.setMt5SuccessDialog,
    submitMt5Password: modules.mt5.submitMt5Password,
}))(withRouter(MT5PasswordModal));
