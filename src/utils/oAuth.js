// @flow
/*
    Pillar Wallet: the personal data locker
    Copyright (C) 2019 Stiftung Pillar Project

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along
    with this program; if not, write to the Free Software Foundation, Inc.,
    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
*/
import { UPDATE_OAUTH_TOKENS } from 'constants/oAuthConstants';
import { signalInitAction } from 'actions/signalClientActions';
import { saveDbAction } from 'actions/dbActions';

export type OAuthTokens = {
  refreshToken?: string,
  accessToken?: string,
};

export const updateOAuthTokensCB = (dispatch: Function, signalCredentials?: Object) => {
  return async (oAuthTokens: OAuthTokens) => {
    dispatch({
      type: UPDATE_OAUTH_TOKENS,
      payload: oAuthTokens,
    });
    if (typeof signalCredentials !== 'undefined') {
      await dispatch(signalInitAction({ ...signalCredentials, ...oAuthTokens }));
    }
    dispatch(saveDbAction('oAuthTokens', { oAuthTokens }, true));
  };
};
