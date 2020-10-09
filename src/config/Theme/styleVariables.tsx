import Colors from './Colors';
import normalize from 'react-native-normalize';

export const Theme = {
  $white: Colors.white,
  $primary: Colors.primary,
  $secondary: Colors.secondary,
  $black: Colors.black,
  $gray: Colors.gray,
  $brightBlack: Colors.brightBlack,
  $fontColor: Colors.black,
  $lightGray: Colors.lightGray,
  $danger: Colors.danger,
  $dangerColor: Colors.danger,

  /**
   * Defaults
   **/
  $defaultBorderColor: Colors.gray,
  $defaultBgColor: Colors.white,
  $defaultBorderRadius: normalize(5),
  $marginBottom: normalize(25),
  $marginHorizontal: normalize(25),
  $defaultPadding: normalize(25),
  $titleMarginTop: normalize(30),
  $descriptionMargin: normalize(20),

  /**
   * Loader
   */
  $loaderDefaultColor: Colors.primary,
  $loaderSecondaryColor: Colors.white,

  /**
   *Image
   */
  $imageRadius: normalize(5),

  /**
   * Header
   */

  $headerHeight: normalize(50),

  /**
   * Wrapper
   **/

  $wrapperPaddingHorizontal: normalize(24),
  $wrapperPaddingBottom: normalize(10),
  $wrapperPaddingTop: normalize(16),

  /**
   *Top Navigation
   */
  $topBarHeight: normalize(50),
  $topBarPaddingTop: normalize(10),

  /**
   * PopupModal
   **/

  $popupModalPaddingBottom: normalize(20),
};
