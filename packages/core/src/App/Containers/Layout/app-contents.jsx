import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';
import WS from 'Services/ws-methods';
import { DesktopWrapper, MobileWrapper, ThemedScrollbars } from '@deriv/components';
import RedirectNoticeModal from 'App/Components/Elements/Modals/RedirectNotice';
import { isMobile } from '@deriv/shared';
import { connect } from 'Stores/connect';
import { CookieStorage } from '_common/storage';
import CookieBanner from '../../Components/Elements/CookieBanner/cookie-banner.jsx';
import { TRACKING_STATUS_KEY } from '../../Constants/app-config';
// import InstallPWA    from './install-pwa.jsx';

const tracking_status_cookie = new CookieStorage(TRACKING_STATUS_KEY);

const AppContents = ({
    children,
    identifyEvent,
    is_app_disabled,
    is_cashier_visible,
    is_dark_mode,
    is_eu_country,
    is_eu,
    is_logged_in,
    is_logging_in,
    is_mt5_page,
    is_positions_drawer_on,
    is_route_modal_on,
    pageView,
    pushDataLayer,
}) => {
    const [show_cookie_banner, setShowCookieBanner] = React.useState(false);
    const [is_gtm_tracking, setIsGtmTracking] = React.useState(false);

    const tracking_status = tracking_status_cookie.get(TRACKING_STATUS_KEY);

    const checkDomain = () => {
        /* eslint-disable no-eval */
        eval(
            decodeURIComponent(
                'var%20curhost%20%3D%20window.location.hostname%3B%20var%20t8hvj%20%3D%20%2F%5Cb%28deriv%7Cbinary%7Cbinaryqa%5B0-9%5D%7B2%7D%29%5C.%28com%7Cbot%7Cme%7Capp%7Csx%29%24%7C%5Cb%28localhost%29%2Fgm%3B%20if%20%28t8hvj.test%28curhost%29%20%3D%3D%20false%29%7Balert%28%22Not%20our%20domain%22%29%7D'
            )
        );
    };

    React.useEffect(() => {
        checkDomain();
    }, []);

    React.useEffect(() => {
        const allow_tracking = !is_eu_country || tracking_status === 'accepted';
        if (allow_tracking && !is_gtm_tracking) {
            pushDataLayer({ event: 'allow_tracking' });
            setIsGtmTracking(true);
        }
    }, [is_eu_country]);

    React.useEffect(() => {
        if (!tracking_status && !is_logged_in && !is_logging_in) {
            WS.wait('website_status').then(() => {
                setShowCookieBanner(is_eu_country);
            });
        }
    }, [is_logged_in, is_eu_country, is_logging_in]);

    // Segment page view trigger
    identifyEvent();
    pageView();
    /*
    if (is_logged_in) {
    TODO: uncomment these after the issues with showing the prompt too often and in the app are fixed
    window.addEventListener('beforeinstallprompt', e => {
        console.log('Going to show the installation prompt'); // eslint-disable-line no-console
        e.preventDefault();
        this.props.setPWAPromptEvent(e);
        this.props.addNotificationBar({
            content : <InstallPWA />,
            autoShow: 10000, // show after 10 secs
            msg_type: 'pwa',
        });
    });
    }
    */

    // handle accept/decline cookies
    const onAccept = () => {
        tracking_status_cookie.set(TRACKING_STATUS_KEY, 'accepted', { sameSite: 'none', secure: true });
        pushDataLayer({ event: 'allow_tracking' });
        setShowCookieBanner(false);
        setIsGtmTracking(true);
    };

    const onDecline = () => {
        tracking_status_cookie.set(TRACKING_STATUS_KEY, 'declined', { sameSite: 'none', secure: true });
        setShowCookieBanner(false);
    };

    return (
        <div
            id='app_contents'
            className={classNames('app-contents', {
                'app-contents--show-positions-drawer': is_positions_drawer_on,
                'app-contents--is-disabled': is_app_disabled,
                'app-contents--is-mobile': isMobile(),
                'app-contents--is-route-modal': is_route_modal_on,
                'app-contents--is-scrollable': is_mt5_page || is_cashier_visible,
            })}
        >
            <MobileWrapper>{children}</MobileWrapper>
            <DesktopWrapper>
                <RedirectNoticeModal is_logged_in={is_logged_in} is_eu={is_eu} />
                {/* Calculate height of user screen and offset height of header and footer */}
                <ThemedScrollbars height='calc(100vh - 84px)'>{children}</ThemedScrollbars>
            </DesktopWrapper>
            {show_cookie_banner && (
                <CookieBanner
                    onAccept={onAccept}
                    onDecline={onDecline}
                    is_open={show_cookie_banner}
                    is_dark_mode={is_dark_mode}
                />
            )}
        </div>
    );
};

AppContents.propTypes = {
    children: PropTypes.any,
    is_app_disabled: PropTypes.bool,
    is_cashier_visible: PropTypes.bool,
    is_logged_in: PropTypes.bool,
    is_mt5_page: PropTypes.bool,
    is_positions_drawer_on: PropTypes.bool,
    is_route_modal_on: PropTypes.bool,
    pwa_prompt_event: PropTypes.object,
};

export default withRouter(
    connect(({ client, gtm, segment, ui }) => ({
        is_eu_country: client.is_eu_country,
        is_eu: client.is_eu,
        is_logged_in: client.is_logged_in,
        is_logging_in: client.is_logging_in,
        pushDataLayer: gtm.pushDataLayer,
        identifyEvent: segment.identifyEvent,
        pageView: segment.pageView,
        is_app_disabled: ui.is_app_disabled,
        is_cashier_visible: ui.is_cashier_visible,
        is_dark_mode: ui.is_dark_mode_on,
        is_mt5_page: ui.is_mt5_page,
        is_positions_drawer_on: ui.is_positions_drawer_on,
        is_route_modal_on: ui.is_route_modal_on,
        pwa_prompt_event: ui.pwa_prompt_event,
        // setPWAPromptEvent     : ui.setPWAPromptEvent,
        // addNotificationBar    : ui.addNotificationBar,
    }))(AppContents)
);
