import React from 'react';
import Loadable from 'react-loadable';

import ContentLoader from '../components/global/loaders/ContentLoader';

const AsyncHomePage = Loadable({
    loader: () => import('../routes/home'),
    loading: () => <ContentLoader />
});

export {
    AsyncHomePage
}