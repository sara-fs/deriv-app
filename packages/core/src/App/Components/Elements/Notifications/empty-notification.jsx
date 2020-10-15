import React from 'react';
import { Icon } from '@deriv/components';
import { localize } from '@deriv/translations';
import { Text } from '@deriv/components';

const EmptyNotification = () => (
    <div className='notifications-empty__container'>
        <div className='notifications-empty'>
            <Icon icon='IcBox' className='notifications-empty__icon' size={64} color='secondary' />
            <div className='notifications-empty__content'>
                <h4 className='notifications-empty__header'>{localize('No notifications')}</h4>
                <Text size='xxs' lineHeight='m' color='less-prominent'>
                    {localize('You have yet to receive any notifications')}
                </Text>
            </div>
        </div>
    </div>
);

export { EmptyNotification };
