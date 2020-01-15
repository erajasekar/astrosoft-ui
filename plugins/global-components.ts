import Vue from 'vue'
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
import GooglePlacesAutocompletePlugin from 'vue-better-google-places-autocomplete'

Vue.use(Datetime)
// You need a specific loader for CSS files
Vue.use(GooglePlacesAutocompletePlugin)