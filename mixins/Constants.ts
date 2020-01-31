export default class Constants {

  public static readonly PLACE_STORAGE_KEY = 'IAS.Place'
  public static readonly TIMEZONE_STORAGE_KEY = 'IAS.Timezone'
  public static readonly IS_PROD = process.env.NODE_ENV === 'production'
  public static readonly APP_BASE_URL = Constants.IS_PROD ? 'https://learn.innovativeastrosolutions.com' : 'http://localhost:3000'
}
