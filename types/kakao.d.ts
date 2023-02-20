// https://developers.kakao.com/sdk/reference/js/release/Kakao.Share.html#LinkObject
export interface LinkObject {
  webUrl?: string;
  mobileWebUrl?: string;
  androidExecutionParams?: string;
  iosExecutionParams?: string;
}

// https://developers.kakao.com/sdk/reference/js/release/Kakao.Share.html#ItemObject
export interface ItemObject {
  item: string;
  itemOp: string;
}

// https://developers.kakao.com/sdk/reference/js/release/Kakao.Share.html#CommerceObject
export interface CommerceObject {
  regularPrice: number;
  discountPrice?: number;
  discountRate?: number;
  fixedDiscountPrice?: number;
  currencyUnit?: string; // "원"
  currencyUnitPosition?: number;
  productName?: string;
}

export interface ButtonObject {
  title: string;
  link: LinkObject;
}

export interface ContentObject {
  title: string;
  imageUrl: string;
  link: LinkObject;
  imageWidth?: number;
  imageHeight?: number;
  description?: string;
}

// https://developers.kakao.com/sdk/reference/js/release/Kakao.Share.html#ItemContentObject
export interface ItemContentObject {
  profileText?: string;
  profileImageUrl?: string;
  titleImageText?: string;
  titleImageUrl?: string;
  titleImageCategory?: string;
  items?: ItemObject[];
  sum?: string;
  sumOp?: string;
}

// https://developers.kakao.com/sdk/reference/js/release/Kakao.Share.html#SocialObject
export interface SocialObject {
  likeCount?: number;
  commentCount?: number;
  sharedCount?: number;
  viewCount?: number;
  subscriberCount?: number;
}

export interface Settings {
  buttonTitle?: string;
  buttons?: ButtonObject[];
  installTalk?: boolean;
  callback?: Function;
  serverCallbackArgs?: Object | string;
}

export type ObjectType =
  | 'feed'
  | 'list'
  | 'location'
  | 'commerce'
  | 'text'
  | 'calendar';

// https://developers.kakao.com/sdk/reference/js/release/Kakao.Share.html#DefaultFeedSettings
export interface DefaultFeedSettings extends Settings {
  objectType: 'feed';
  content: ContentObject;
  itemContent?: ItemContentObject;
  social?: SocialObject;
}

// https://developers.kakao.com/sdk/reference/js/release/Kakao.Share.html#DefaultListSettings
export interface DefaultListSettings extends Settings {
  objectType: 'list';
  headerTitle: string;
  headerLink: string;
  contents: ContentObject[];
}

// https://developers.kakao.com/sdk/reference/js/release/Kakao.Share.html#DefaultLocationSettings
export interface DefaultLocationSettings extends Settings {
  objectType: 'location';
  content: ContentObject;
  address: string;
  addressTitle?: string;
  social?: SocialObject;
}

// https://developers.kakao.com/sdk/reference/js/release/Kakao.Share.html#DefaultCommerceSettings
export interface DefaultCommerceSettings extends Settings {
  objectType: 'commerce';
  content: ContentObject;
  commerce: CommerceObject;
}

// https://developers.kakao.com/sdk/reference/js/release/Kakao.Share.html#DefaultTextSettings
export interface DefaultTextSettings extends Settings {
  objectType: 'text';
  text: string;
  link: LinkObject;
}

// https://developers.kakao.com/sdk/reference/js/release/Kakao.Share.html#DefaultCalendarSettings
export interface DefaultCalendarSettings extends Omit<Settings, 'buttonTitle'> {
  objectType: 'calendar';
  idType: 'event' | 'calendar';
  id: string;
  content: ContentObject;
}

export type SettingParam =
  | DefaultFeedSettings
  | DefaultCalendarSettings
  | DefaultCommerceSettings
  | DefaultListSettings
  | DefaultLocationSettings
  | DefaultTextSettings;

interface KakaoShare {
  readonly createDefaultButton: <T>(
    settings: Partial<T> & { container: `#${string}` },
  ) => void;
  readonly sendDefault: <T>(settings: Partial<T>) => void;
}

interface KakaoBase {
  readonly VERSION: `${number}.${number}.${number}`;
  readonly cleanup: () => void;
  readonly init: (appKey: string) => void;
  readonly isInitialized: () => boolean;
}

declare global {
  export interface Window {
    readonly Kakao: KakaoBase & { Share: KakaoShare };
  }
}
