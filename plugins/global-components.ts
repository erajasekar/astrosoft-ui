import Vue from 'vue'
import { Datetime } from 'vue-datetime'
import GooglePlacesAutocompletePlugin from 'vue-better-google-places-autocomplete'

// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'

Vue.use(Datetime)
Vue.use(GooglePlacesAutocompletePlugin)