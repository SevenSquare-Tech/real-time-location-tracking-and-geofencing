declare module "react-native-background-geolocation" {
  /**
   * @example
   * ```typescript
   * // Url to demo server.
   * let url = "http://tracker.transistorsoft.com";
   * let orgname = "my-company-name";
   * let username = "my-username";
   *
   * // Fetch an authoriztion token from server.  The SDK will cache the received token.
   * let token = await
   *   BackgroundGeolocation.findOrCreateTransistorAuthorizationToken(orgname, username, url);
   *
   * BackgroundGeolocation.ready({
   *   transistorAuthorizationToken: token
   * })
   * ```
   *
   * ## Viewing Your Tracking Results
   *
   * To *view* your tracking results in the browser, use your configured "Organization Name" and visit:
   *
   * http://tracker.transistorsoft.com/my-organization-name
   *
   */
  interface TransistorAuthorizationToken {
    /**
     * The authorization token to provide to [[Authorization.accessToken]]
     *
     * @example
     * ```typescript
     * BackgroundGeolocation.ready({
     *  authorization: {
     *    accessToken:
     *  }
     * });
     * ```
     */
    accessToken: string;
    /**
     * The token used to request to provide to [[Authorization.refreshToken]]
     */
    refreshToken: string;
    /**
     * The expiry time of the [[Authorization.accessToken]]
     */
    expires: number;
    /**
     * The url to the Transistor Demo server where this token came from.
     * __Read only__
     */
    url?: string;
  }
}
