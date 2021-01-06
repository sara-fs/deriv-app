import * as React from 'react';
import { Text } from '@deriv/components';
import { observer } from 'mobx-react-lite';
// import { getUrlBase } from '@deriv/shared';

const Banner: React.FC<TBannerProps> = ({ type, title }) => {
    return (
        <React.Fragment>
            <div className='tradetype-template__banner'>
                <div className='tradetype-template__banner--container'>
                    <Text size='m' color='colored-background' align='center' styles={{ lineHeight: '3rem' }}>
                        {type}
                    </Text>
                    <Text
                        size='xl'
                        weight='bold'
                        color='colored-background'
                        align='center'
                        styles={{ lineHeight: '6rem' }}
                    >
                        {title}
                    </Text>
                </div>
            </div>
        </React.Fragment>
    );
};

type TBannerProps = {
    type: string;
    title: string;
};

export default observer(Banner);
