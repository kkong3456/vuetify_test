import Vue from 'vue'
import { required, digits, email, max, regex, confirmed } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')

extend('digits', {
  ...digits,
  message: '{_field_} needs to be {length} digits. ({_value_})',
})

extend('required', {
  ...required,
  message: '{_field_} 빈칸을 채우세요',
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
})

extend('regex', {
  ...regex,
  message: '{_field_} {_value_} does not match {regex}',
})

extend('email', {
  ...email,
  message: '이메일 형식에 맞추어 주세요',
})

extend('confirmed',{
  ...confirmed,
  message:'비밀번호와 비밀번호 확인이 일치 하지 않습니다.',
})

Vue.component('ValidationObserver',ValidationObserver)
Vue.component('ValidationProvider',ValidationProvider)
